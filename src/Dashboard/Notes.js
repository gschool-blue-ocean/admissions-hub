import { useState } from 'react';
import Problems from '../Interview/Problems';
import styles from '../../styles/Interview.module.css';
import Ratings from '../Interview/Ratings';

export default function Notes({ data, setShowNotes }) {
  const [pNum, setPNum] = useState(0);

  const [problem1Notes, setProblem1Notes] = useState(data.notes_1);
  const [problem2Notes, setProblem2Notes] = useState(data.notes_2);
  const [problem3Notes, setProblem3Notes] = useState(data.notes_3);

  const [problem1Rating, setProblem1Rating] = useState(data.problem_1_rating);
  const [problem2Rating, setProblem2Rating] = useState(data.problem_2_rating);
  const [problem3Rating, setProblem3Rating] = useState(data.problem_3_rating);

  const [status, setStatus] = useState(data.state);

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

  function doesNothing() {}

  return (
    <div className={styles.notesShadow}>
      <div className={styles.noteBorder}>
        <div className={styles.notePad}>
          <Problems
            problem1Notes={problem1Notes}
            problem2Notes={problem2Notes}
            problem3Notes={problem3Notes}
            pNum={pNum}
            setPNum={setPNum}
            problem1={problem1}
            problem2={problem2}
            problem3={problem3}
            toggleEditableNotes={false}
          />
          <Ratings
            problem1Rating={problem1Rating}
            problem2Rating={problem2Rating}
            problem3Rating={problem3Rating}
            setProblem1Rating={doesNothing}
            setProblem2Rating={doesNothing}
            setProblem3Rating={doesNothing}
          />
          <div className={styles.questionNum}></div>
          <div className={styles.optionsRow}>
            <div className={styles.statusStatic}>{status}</div>
            <div
              id="returnButton"
              className={styles.notepadButton}
              onClick={() => setShowNotes(false)}
            >
              Return
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
