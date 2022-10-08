import axios from "axios";
import React, { useEffect, useState } from "react";
import AllRatings from "./AllRatings";
import InterviewerReport from "./InterviewerReport";
import StudentInfo from "./StudentInfo";

const InterviewDash = () => {
  useEffect(() => {
    axios.get("/api/candidate/readCandidate").then((res) => {
      setStudents(res.data);
    });
  }, []);

  const [students, setStudents] = useState([]);

  return (
    <div style={{ width: 730, margin: "5% auto" }}>
      <AllRatings />
      <StudentInfo students={students} setStudents={setStudents} />
      <InterviewerReport />
    </div>
  );
};

export default InterviewDash;
