import React from "react";
import AllRatings from "./AllRatings";
import BtnDashboard from "./BtnDashboard";
import InterviewerReport from "./InterviewerReport";
import StudentInfo from "./StudentInfo";
import BtnInterviewHost from "./BtnInterviewHost"

const InterviewDash = () => {
  return (
    <div style={{ width: 730, margin: "5% auto" }}>
      <AllRatings />
      <StudentInfo />
      <InterviewerReport />
      <BtnDashboard />
      <BtnInterviewHost />
    </div>
  );
};

export default InterviewDash;
