import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AllRatings from './AllRatings';
import InterviewerReport from './InterviewerReport';
import StudentInfo from './StudentInfo';

const InterviewDash = () => {
  // const [newTest, setNewTest] = useState();
  const [studentsList, setStudentsList] = useState([]);
  useEffect(() => {
    axios.get(`/api/candidate/Candidate`).then((result) => {
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
    });
  }, []);

  return (
    <div style={{ width: 730, margin: '5% auto', textColor: 'black' }}>
      <AllRatings />
      <StudentInfo />
      <InterviewerReport />
    </div>
  );
};

export default InterviewDash;
