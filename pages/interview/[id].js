import CodeEditor from "../../src/Interview/CodeEditor";
import NotePad from "../../src/Interview/NotePad";
import Header from "../../src/Shared/Header";
import Footer from "../../src/Shared/Footer";
import { useEffect, useState } from "react";
import RoomInfo from "../../src/Interview/RoomInfo";
import Loading from "../../src/Shared/Loading";
import axios from "axios";
import auth from "../../lib/auth";
import { useRouter } from "next/router";
import styles from "../../styles/Interview.module.css";
import io from "socket.io-client";

let socket;

export default function Interview() {
  const [data, setData] = useState({});
  const [student, setStudent] = useState({});
  const [archivedStudent, setArchivedStudent] = useState({});
  const [role, setRole] = useState(false);
  const [authed, setAuthed] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  let room = id;

  const problem1 = {
    question: `Working with Objects Given two objects as parameters
    "obj1" and "obj2", complete the addPropertiesToObject function
    that adds all properties of the first object to the second object
    and returns the second object.`,
    code: `function addPropertiesToObject(obj1, obj2) {
    } `,
  };
  const problem2 = {
    question: `Complete the createNewArray function that takes in an
     array and another function, then returns a new array containing
     the results of calling the input function on each element in
     the array.`,
    code: `function createNewArray(arr, func) {
    }`,
  };
  const problem3 = {
    question: `Working with Strings and Functions Complete
    the logger function that takes in a function and a string
    and returns the result of calling the function on each
    letter in the string.`,
    code: `function logger(func, str) {
    }`,
  };

  const [pNum, setPNum] = useState(0);
  const [input1, setInput1] = useState(
    `/*${problem1.question}*/\n` + problem1.code
  );
  const [input2, setInput2] = useState(
    `/*${problem2.question}*/\n` + problem2.code
    );
  const [input3, setInput3] = useState(
    `/*${problem3.question}*/\n` + problem3.code
  );
  // the current input in CodeEditor
  const [input, setInput] = useState("");

  // variable is accessible now from outside the socket
  useEffect(() => {
    if (input.length > 1) {
      if (pNum === 0) {
        setInput1(input);
      } else if (pNum === 1) {
        setInput2(input);
      } else if (pNum === 2) {
        setInput3(input);
      }
    }
  }, [input]);

  useEffect(() => {
    // this little check ensures that the id is loaded from the router. It's slow. (relative to useEffect trigger)
    if (!id) {
      return;
    }
    setTimeout(() => {
      auth(
        () => {
          setRole(true), setAuthed(true);
        },
        () => {
          setRole(false), setAuthed(true);
        }
      );
    }, 1000);
    getInterviewData();
  }, [id]);
  // console.log("CURR INPUT IN [ID]\n", input);

  //initialize socket session
  const socketInitializer = async () => {
    await fetch(`/api/socket`);
    socket = io();
    socket.on("connect", () => {
      //console.log('connected to socket');
    });
    socket.on("update-input", (msg) => {
      setInput(msg);
    });
    socket.on("update-pNum", (num) => {
      setPNum(num);
    });
    socket.emit("join", room, (str) => logRoomStatus(str));
    return () => {
      socket.disconnect();
    };
  };

  const changePNumHandler = (pNum) => {
    setPNum(pNum);
    socket.emit("pNum-change", pNum, room);
  };

  function getInterviewData() {
    axios
      .get(`/api/interviews/${id}`)
      .then((result) => result.data)
      .then((data) => {
        setData(data);
        if (data.submission_1 != null) {
          setInput1(data.submission_1);
        }
        if (data.submission_2 != null) {
          setInput2(data.submission_2);
        }
        if (data.submission_3 != null) {
          setInput3(data.submission_3);
        }
        getCandidateData(data.candidate_id);
        getCandidateHistoryData(data.candidate_id);
      })
      .catch((err) => console.log(err));
  }

  function logRoomStatus(str) {
    console.log(str);
  }

  function getCandidateData(id) {
    axios
      .get(`/api/candidate/${id}`)
      .then((result) => result.data)
      .then((data) => {
        setStudent(data);
      })
      .catch((err) => console.log(err));
  }

  function getCandidateHistoryData(id) {
    axios
      .get(`/api/candidate-history/${id}`)
      .then((result) => result.data)
      .then((data) => {
        setArchivedStudent(data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    if (id != null) {
      socketInitializer(id);
    }
  }, [id]);

  return authed ? (
    <div className={styles.interviewPage}>
      <Header />
      <div className={styles.interviewContent}>
        <CodeEditor
          sessionId={id}
          input={input}
          input1={input1}
          input2={input2}
          input3={input3}
          pNum={pNum}
          role={role}
          problem1={problem1}
          problem2={problem2}
          problem3={problem3}
          changePNumHandler={changePNumHandler}
          socket={socket}
          room={room}
        />

        {role ? (
          <div className={styles.adminColumn}>
            <RoomInfo
              student={student}
              archivedStudent={archivedStudent}
              room={data.id}
            />
            <NotePad
              data={data}
              student={student}
              setData={setData}
              input1={input1}
              input2={input2}
              input3={input3}
              pNum={pNum}
              setPNum={setPNum}
              changePNumHandler={changePNumHandler}
            />
          </div>
        ) : null}
      </div>
      <Footer />
    </div>
  ) : (
    <Loading />
  );
}
