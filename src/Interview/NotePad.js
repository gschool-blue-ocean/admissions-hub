import React, { useEffect, useState } from 'react';
import Problems from './Problems';
import axios from 'axios';
import { useRouter } from 'next/router';
import styles from '../../styles/Interview.module.css';
import Ratings from './Ratings';
import CheckBoxes from './CheckBoxes';

export default function Dashboard({ data, setData }) {
  const [problem1Notes, setProblem1Notes] = useState(data.notes_1);
  const [problem2Notes, setProblem2Notes] = useState(data.notes_2);
  const [problem3Notes, setProblem3Notes] = useState(data.notes_3);

  const [problem1Rating, setProblem1Rating] = useState(data.problem_1_rating);
  const [problem2Rating, setProblem2Rating] = useState(data.problem_2_rating);
  const [problem3Rating, setProblem3Rating] = useState(data.problem_3_rating);

  const [status, setStatus] = useState('Incomplete');

  const [variables, setVariables] = useState(false);
  const [arrays, setArrays] = useState(false);
  const [operators, setOperators] = useState(false);
  const [conditionals, setConditionals] = useState(false);
  const [loops, setLoops] = useState(false);
  const [accumulator, setAccumulator] = useState(false);
  const [extraResources, setExtraResources] = useState('');

  function toggleStatus() {
    if (status === 'Incomplete') {
      setStatus('Pass');
    } else if (status === 'Pass') {
      setStatus('Fail');
    } else if (status === 'Fail') {
      setStatus('Incomplete');
    }
  }

  function completeInterview() {
    let today = new Date().toISOString().slice(0, 10);
    let data = {
      id: data.id,
      notes_1: problem1Notes,
      notes_2: problem2Notes,
      notes_3: problem3Notes,
      problem_1_rating: problem1Rating,
      problem_2_rating: problem2Rating,
      problem_3_rating: problem3Rating,
      code: data.code,
      date: today,
      state: status
    };
  }

  // const router = useRouter();

  // const completeInterview = () => {
  //   axios
  //     .patch(`/api/candidate/${info.email}`, newPatchRequest)
  //     .then(function (response) {
  //       //console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };
  // const completeInterviews = () => {
  //   //console.log('interview object', interviewObj);
  //   axios
  //     .patch(`/api/interviews/update`, interviewObj)
  //     .then(function (response) {
  //       //console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  // let studyMaterial = {};

  // if (variables) {
  //   studyMaterial.variables = variablesLink;
  // }
  // if (arrays) {
  //   studyMaterial.arrays = arraysLink;
  // }
  // if (operators) {
  //   studyMaterial.operators = operatorsLink;
  // }
  // if (conditionals) {
  //   studyMaterial.conditionals = conditionalsLink;
  // }
  // if (loops) {
  //   studyMaterial.loops = loopsLink;
  // }
  // if (accumulator) {
  //   studyMaterial.accumulator = accumulatorLink;
  // }
  // if (extraResources !== '') {
  //   studyMaterial.extraResources = extraResources;
  // }

  return (
    <div className={styles.notePad}>
      <Problems
        problem1Notes={problem1Notes}
        problem3Notes={problem3Notes}
        problem2Notes={problem2Notes}
        setProblem1Notes={setProblem1Notes}
        setProblem2Notes={setProblem2Notes}
        setProblem3Notes={setProblem3Notes}
      />
      {/* <Ratings
        setValue={setValue}
        setProblem1Rating={setProblem1Rating}
        setProblem2Rating={setProblem2Rating}
        setProblem3Rating={setProblem3Rating}
      /> */}
      {/* <CheckBoxes
     
      /> */}
      <div className={styles.optionsRow}>
        <div
          className={styles.notepadButton}
          onClick={toggleStatus}
        >
          {status}
        </div>
        <div className={styles.notepadButton}>Submit</div>
      </div>
    </div>
  );
}