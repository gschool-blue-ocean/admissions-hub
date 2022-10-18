import axios from "axios";
import React, { useEffect, useState } from "react";
import AllRatings from "./AllRatings";
import InterviewerReport from "./InterviewerReport";
import StudentInfo from "./StudentInfo";

const InterviewDash = () => {
  useEffect(() => {
    axios.get(`/api/candidate/Candidate`).then((res) => {
      setStudents(res.data);
    });
  }, []);

  const [students, setStudents] = useState([]);

  return (
    <div style={{ width: 730, margin: "5% auto" }}>
      <AllRatings students={students} />
      <StudentInfo students={students} setStudents={setStudents} />
      <InterviewerReport students={students} />
    </div>
  );
};

export default InterviewDash;
