import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DashTop from './DashTop';
import DashBottom from './DashBottom';
import DashMid from './DashMid';
import styles from '../../styles/Dashboard.module.css';

export default function DashContent() {
  const [candidates, setCandidates] = useState([]);
  const [candidatesHistory, setCandidatesHistory] = useState([]);
  const [interviews, setInterviews] = useState([]);

  function getCandidates() {
    axios
      .get(`/api/combo`)
      .then((result) => result.data)
      .then((data) => {
        setCandidates(filterCandidateList(data));
      })
      .catch((err) => console.log(err));
  }

  function getArchivedCandidates(){
    axios
      .get(`/api/combo-history`)
      .then((result) => result.data)
      .then((data) => {
        setCandidatesHistory(filterCandidateList(data));
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

  function getInterviews() {
    axios
      .get(`/api/interviews`)
      .then((result) => result.data)
      .then((data) => {
        setInterviews(data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getCandidates();
    getArchivedCandidates();
    getInterviews();
  }, []);

  return (
    <div className={styles.dashContent}>
      <DashTop interviews={interviews} />
      <DashMid
        candidates={candidates}
        candidatesHistory={candidatesHistory}
        getCandidates={getCandidates}
        getArchivedCandidates={getArchivedCandidates}
      />
      <DashBottom interviews={interviews} />
    </div>
  );
}
