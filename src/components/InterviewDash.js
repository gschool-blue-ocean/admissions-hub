import React from "react";
import AllRatings from "./AllRatings";
import InterviewerReport from "./InterviewerReport";
import StudentInfo from "./StudentInfo";

const InterviewDash = () => {
  return (
    <div style={{ width: 730, margin: "5% auto" }}>
      <AllRatings />
      <StudentInfo />
      <InterviewerReport />
    </div>
  );
};

export default InterviewDash;
