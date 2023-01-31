import React, { useEffect, useState } from 'react';
import Problems from './Problems';
import axios from 'axios';
import { useRouter } from 'next/router';
import styles from '../../styles/Interview.module.css';
import Ratings from './Ratings';
import CheckBoxes from './CheckBoxes';

const Dashboard = () => {
  const [value, setValue] = useState(0);
  const [userId, setUserId] = useState('');
  const [problem1Notes, setProblem1Notes] = useState('');
  const [problem2Notes, setProblem2Notes] = useState('');
  const [problem3Notes, setProblem3Notes] = useState('');

  const [problem1Rating, setProblem1Rating] = useState('');
  const [problem2Rating, setProblem2Rating] = useState('');
  const [problem3Rating, setProblem3Rating] = useState('');

  const [variables, setVariables] = useState(false);
  const [arrays, setArrays] = useState(false);
  const [operators, setOperators] = useState(false);
  const [conditionals, setConditionals] = useState(false);
  const [loops, setLoops] = useState(false);
  const [accumulator, setAccumulator] = useState(false);
  const [extraResources, setExtraResources] = useState('');

  // useEffect(() => {
  //   if (!user) return;
  //   if (user.id) {
  //     //console.log('user id', user.id);
  //     localStorage.setItem('userId', JSON.stringify(user.id));

  //     setUserId(user.id);
  //   } else {
  //     if (typeof window !== 'undefined') {
  //       let temp = JSON.parse(localStorage.getItem('userId'));
  //       setUserId(temp);
  //     }
  //   }
  // }, []);

  // let totalPercent = `${((value / 12) * 100).toFixed(0)}%`;

  // const variablesLink =
  //   'https://learn-2.galvanize.com/cohorts/1346/blocks/1615/content_files/08-variables/00-section-overview.md';
  // const arraysLink =
  //   'https://learn-2.galvanize.com/cohorts/1346/blocks/1615/content_files/09-Objects/00-section-overview.md';
  // const operatorsLink =
  //   'https://learn-2.galvanize.com/cohorts/1346/blocks/1615/content_files/10-Operators-and-Methods/00-section-overview.md';
  // const conditionalsLink =
  //   'https://learn-2.galvanize.com/cohorts/1346/blocks/1615/content_files/11-Conditionals/00-section-overview.md';
  // const loopsLink =
  //   'https://learn-2.galvanize.com/cohorts/1346/blocks/1615/content_files/12-loops/00-section-overview.md';
  // const accumulatorLink =
  //   'https://learn-2.galvanize.com/cohorts/1346/blocks/1615/content_files/13-Accumulator-Pattern/00-section-overview.md';

  // let passOrFail;
  // if (((value / 12) * 100).toFixed(0) >= 70) {
  //   passOrFail = true;
  // } else {
  //   passOrFail = false;
  // }

  // const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  // var today = new Date();
  // let numAttempt = Number(info.attempt);

  // let newPatchRequest = {
  //   pass: passOrFail
  // };

  // let interviewObj = {
  //   id: interview ? interview.id : null, //Add interview
  //   interviewers_id: userId,
  //   candidates_id: info.candidates_id,
  //   notes_1: problem1Notes,
  //   notes_2: problem2Notes,
  //   notes_3: problem3Notes,
  //   problem_1_rating: problem1Rating,
  //   problem_2_rating: problem2Rating,
  //   problem_3_rating: problem3Rating,
  //   date: today,
  //   attempt: numAttempt + 1,
  //   pass: passOrFail,
  //   complete: true
  // };

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
        variables={variables}
        arrays={arrays}
        setVariables={setVariables}
        setArrays={setArrays}
        operators={operators}
        setOperators={setOperators}
        conditionals={conditionals}
        setConditionals={setConditionals}
        loops={loops}
        setLoops={setLoops}
        accumulator={accumulator}
        setAccumulator={setAccumulator}
        extraResources={extraResources}
        setExtraResources={setExtraResources}
      /> */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: 10,
          paddingBottom: 2
        }}
      >
        <button
          className={styles.bob}
          id={styles.complete}
          onClick={() => {
            completeInterview();
            completeInterviews();
            axios
              .get(`/api/candidate/Candidate`)
              .then((result) => {
                let temp = result.data;

                const arr = temp.reduce((result, obj) => {
                  let row = result.find((x) => x.candidates_id === obj.candidates_id);
                  if (!row) result.push({ ...obj });
                  else if (parseInt(row.attempt) < parseInt(obj.attempt)) Object.assign(row, obj);
                  return result;
                }, []);

                arr.sort(function (a, b) {
                  // Turn your strings into dates, and then subtract them
                  // to get a value that is either negative, positive, or zero.
                  return new Date(b.date) - new Date(a.date);
                });
                setStudents(arr);
              })
              .then(router.push('../dashboard'));

            // router.push("../dashboard");
          }}
          style={{
            width: 220,
            height: 40,
            color: 'white',
            backgroundColor: '#EF6E47',
            border: 'none',
            fontSize: 16,
            fontFamily: 'League Spartan'
          }}
        >
          Complete Interview
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
