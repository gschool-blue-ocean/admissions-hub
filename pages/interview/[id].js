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
  const [role, setRole] = useState(false);
  const [authed, setAuthed] = useState(false);
  const router = useRouter();
  const { id } = router.query;


  const problem1 = {
    question: `Working with Strings and Functions Complete
    the logger function that takes in a function and a string
    and returns the result of calling the function on each letter
    in the string.`,

    code: `function addPropertiesToObject(obj1, obj2) {
    // Must combine all properties of obj1 to obj2
    // Use Object.assign to combine obj1 to obj2.
    Object.assign(obj2, obj1);
    // Must return obj2
    return obj2;
    } `,

    code: `function createNewArray(arr, func) {
      // create new array
      //Create a new array with array and function
      var newArr = Array.from(arr, func);
      //Return new array
      return newArr;
      }`,
  };

    const problem2 = {
      question: `Working with Strings and Functions Complete
    the logger function that takes in a function and a string
    and returns the result of calling the function on each letter
    in the string.`,

      code: `function addPropertiesToObject(obj1, obj2) {
    // Must combine all properties of obj1 to obj2
    // Use Object.assign to combine obj1 to obj2.
    Object.assign(obj2, obj1);
    // Must return obj2
    return obj2;
    } `,

      code: `function createNewArray(arr, func) {
      // create new array
      //Create a new array with array and function
      var newArr = Array.from(arr, func);
      //Return new array
      return newArr;
      }`,
    };
  

  const problem3 = {
    question: `Working with Strings and Functions Complete
    the logger function that takes in a function and a string
    and returns the result of calling the function on each
    letter in the string.`,

    code: `function logger(func, str) {
      // create new empty string
      var newStr = '';
      //Loop through each letter of the string
      for (var i = 0; i < str.length;i++) {
      //Put letters from function to the new string
      newStr +=  func(str[i]) }
      // return new string
      return newStr;
      }`,
  };
  const [pNum, setPNum] = useState(0);
  const [input1, setInput1] = useState(`/*${problem1.question}*/\n`+problem1.code);
  const [input2, setInput2] = useState(`/*${problem2.question}*/\n`+problem2.code);
  const [input3, setInput3] = useState(`/*${problem3.question}*/\n`+problem3.code);

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
        getCandidateData(data.candidate_id);
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

  // console.log(pNum);
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
            <RoomInfo student={student} room={data.id} />
            <NotePad
              data={data}
              student={student}
              setData={setData}
              input1={input1}
              input2={input2}
              input3={input3}
              pNum={pNum}
              setPNum={setPNum}
              problem1={problem1}
              problem2={problem2}
              problem3={problem3}
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
