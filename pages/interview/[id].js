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

export default function Interview() {
  const [data, setData] = useState({});
  const [student, setStudent] = useState({});
  const [archivedStudent, setArchivedStudent] = useState({});
  const [role, setRole] = useState(false);
  const [authed, setAuthed] = useState(false);
  const router = useRouter();
  const { id } = router.query;

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

  return authed ? (
    <div className={styles.interviewPage}>
      <Header />
      <div className={styles.interviewContent}>
        <CodeEditor
          sessionId={id}
          input1={input1}
          setInput1={setInput1}
          input2={input2}
          setInput2={setInput2}
          input3={input3}
          setInput3={setInput3}
          pNum={pNum}
          setPNum={setPNum}
          role={role}
          problem1={problem1}
          problem2={problem2}
          problem3={problem3}
        />

        {role ? (
          <div className={styles.adminColumn}>
            <RoomInfo student={student} archivedStudent={archivedStudent} room={data.id} />
            <NotePad
              data={data}
              student={student}
              setData={setData}
              input1={input1}
              input2={input2}
              input3={input3}
              pNum={pNum}
              setPNum={setPNum}
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
