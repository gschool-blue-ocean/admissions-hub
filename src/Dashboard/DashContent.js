import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DashTop from './DashTop';
import DashBottom from './DashBottom';
import DashMid from './DashMid';
import styles from '../../styles/Dashboard.module.css';

const InterviewDash = () => {
  const [candidates, setCandidates] = useState([]);
  const [interviews, setInterveiws] = useState([]);

  function getCandidates() {
    axios
      .get(`/api/combo`)
      .then((result) => result.data)
      .then((data) => {
        setCandidates(filterCandidateList(data));
        console.log(data);
      })
      .catch((err) => console.log(err));
  }

  function filterCandidateList(list) {
    let ids = new Set();
    let output = [];
    for (let i = 0; i < list.length; i++) {
      if (ids.has(list[i].id)) {
        continue;
      } else {
        ids.add(list[i].id);
        output.push(list[i]);
      }
    }
    return output;
  }

  function getInterveiws() {
    axios
      .get(`/api/interviews`)
      .then((result) => result.data)
      .then((data) => {
        setInterveiws(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }

  function getCombo() {}

  useEffect(() => {
    getCandidates();
    getInterveiws();
  }, []);

  return (
    <div className={styles.dashContent}>
      <DashTop interviews={interviews} />
      <DashMid
        candidates={candidates}
        getCandidates={getCandidates}
      />
      <DashBottom />
    </div>
  );
};

export default InterviewDash;
