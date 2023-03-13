import { useEffect, useState } from "react";
import Problems from "./Problems";
import axios from "axios";
import { useRouter } from "next/router";
import styles from "../../styles/Interview.module.css";
import Ratings from "./Ratings";

export default function NotePad({
  data,
  student,
  input1,
  input2,
  input3,
  pNum,
  setPNum,
  changePNumHandler
}) {
  // answers
  const problem1 = {
    question: `Working with Objects Given two objects as parameters
    "obj1" and "obj2", complete the addPropertiesToObject function
    that adds all properties of the first object to the second object
    and returns the second object.`,

    code: `function addPropertiesToObject(obj1, obj2) {
    // Must combine all properties of obj1 to obj2
    // Use Object.assign to combine obj1 to obj2.
    Object.assign(obj2, obj1);
    // Must return obj2
    return obj2;
    } `,
  };

  const problem2 = {
    question: `Complete the createNewArray function that takes in an
     array and another function, then returns a new array containing
     the results of calling the input function on each element in
     the array.`,

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
  const router = useRouter();

  const [problem1Notes, setProblem1Notes] = useState(data.notes_1 || "");
  const [problem2Notes, setProblem2Notes] = useState(data.notes_2 || "");
  const [problem3Notes, setProblem3Notes] = useState(data.notes_3 || "");

  const [problem1Rating, setProblem1Rating] = useState(data.problem_1_rating || 0);
  const [problem2Rating, setProblem2Rating] = useState(data.problem_2_rating || 0);
  const [problem3Rating, setProblem3Rating] = useState(data.problem_3_rating || 0);

  const [status, setStatus] = useState("Incomplete");

  function changeStatus() {
    const form = document.getElementById("statusToggle");
    setStatus(form.value);
  }

  function submitInterview() {
    let today = new Date();
    let body = {
      notes_1: problem1Notes,
      notes_2: problem2Notes,
      notes_3: problem3Notes,
      problem_1_rating: problem1Rating,
      problem_2_rating: problem2Rating,
      problem_3_rating: problem3Rating,
      submission_1: input1,
      submission_2: input2,
      submission_3: input3,
      date: today,
      state: status,
    };
    axios.patch("/api/interviews/" + data.id, body).then((result) => {
      router.push("/dashboard");
    });

    let text = JSON.stringify({
      text: `${student.last_name}, ${student.first_name} has achieved a grade of : '${status}' on the Admissions Coding Challenge.`,
    });

    const slackWebHook = process.env.NEXT_PUBLIC_SLACK_WEBHOOK;

    axios
      .post(slackWebHook, text)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function exitInterview() {
    router.push("/dashboard");
  }

  return (
    <div className={styles.notePad}>
      <Problems
        problem1={problem1}
        problem2={problem2}
        problem3={problem3}
        problem1Notes={problem1Notes}
        problem2Notes={problem2Notes}
        problem3Notes={problem3Notes}
        setProblem1Notes={setProblem1Notes}
        setProblem2Notes={setProblem2Notes}
        setProblem3Notes={setProblem3Notes}
        pNum={pNum}
        toggleEditableNotes={true}
        changePNumHandler={changePNumHandler}
      />
      <Ratings
        problem1Rating={problem1Rating}
        problem2Rating={problem2Rating}
        problem3Rating={problem3Rating}
        setProblem1Rating={setProblem1Rating}
        setProblem2Rating={setProblem2Rating}
        setProblem3Rating={setProblem3Rating}
        input1={input1}
        input2={input2}
        input3={input3}
      />
      {student ? (
        <>
          <div className={styles.questionNum}>Set Status and Submit</div>
          <div className={styles.optionsRow}>
            <form className="statusForm" onChange={changeStatus}>
              <select id="statusToggle" className={styles.statusToggle}>
                <option value="Incomplete">Incomplete</option>
                <option value="Pass">Pass</option>
                <option value="Fail">Fail</option>
              </select>
            </form>
            <div
              id="submitButton"
              className={styles.notepadButton}
              onClick={submitInterview}
            >
              Submit
            </div>
          </div>
        </>
      ) : (
        <div className={styles.optionsRow}>
          <div
            id="submitButton"
            className={styles.notepadButton}
            onClick={exitInterview}
          >
            Exit
          </div>
        </div>
      )}
    </div>
  );
}
