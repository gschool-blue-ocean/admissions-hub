import React from "react";
import AllRatings from "./AllRatings";
import InterviewerReport from "./InterviewerReport";
import StudentInfo from "./StudentInfo";

const InterviewDash = () => {
  return (
    <div style={{ width: 730 }}>
      InterviewDash
      <AllRatings />
      <StudentInfo />
      <InterviewerReport />
    </div>
  );
};

export default InterviewDash;
