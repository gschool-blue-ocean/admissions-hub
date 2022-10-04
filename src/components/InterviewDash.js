import React, { useState } from "react";
import AllRatings from "./AllRatings";
import InterviewerReport from "./InterviewerReport";
import StudentInfo from "./StudentInfo";

const InterviewDash = () => {
  const [students, setStudents] = useState([
    {
      firstName: "Kevin",
      lastName: "Reaves",
      email: "Reaveskev@gmail.com",
      cohort: "MCSP-13",
      date: "27-JUN-22",
      attempt: 99,
      pass: true,
    },
    {
      firstName: "Jeremy",
      lastName: "Linder",
      email: "jeremylinder2@gmail",
      cohort: "MCSP-13",
      date: "27-JUN-22",
      attempt: 99,
      pass: false,
    },
    {
      firstName: "Kyle",
      lastName: "Jones",
      email: "jones.kyle2893@gmail.com",
      cohort: "MCSP-13",
      date: "27-JUN-22",
      attempt: 99,
      pass: false,
    },
    {
      firstName: "Thanh",
      lastName: "Le",
      email: "huybenpro@gmail.com",
      cohort: "MCSP-13",
      date: "27-JUN-22",
      attempt: 99,
      pass: false,
    },
    {
      firstName: "Matthew",
      lastName: "Rust",
      email: "matthewrust21@gmail.com",
      cohort: "MCSP-13",
      date: "27-JUN-22",
      attempt: 99,
      pass: true,
    },
    {
      firstName: "Hung",
      lastName: "Nguyen",
      email: "hungnguyen1693@gmail.com",
      cohort: "MCSP-13",
      date: "27-JUN-22",
      attempt: 99,
      pass: true,
    },
    {
      firstName: "Kevin",
      lastName: "Reaves",
      email: "Reaveskev12@gmail.com",
      cohort: "MCSP-13",
      date: "27-JUN-22",
      attempt: 99,
      pass: true,
    },
    {
      firstName: "Jeremy",
      lastName: "Linder",
      email: "jeremylinder12@gmail",
      cohort: "MCSP-13",
      date: "27-JUN-22",
      attempt: 99,
      pass: false,
    },
    {
      firstName: "Kyle",
      lastName: "Jones",
      email: "jones.kyle289312@gmail.com",
      cohort: "MCSP-13",
      date: "27-JUN-22",
      attempt: 99,
      pass: false,
    },
    {
      firstName: "Thanh",
      lastName: "Le",
      email: "huybenpro12@gmail.com",
      cohort: "MCSP-13",
      date: "27-JUN-22",
      attempt: 99,
      pass: false,
    },
    {
      firstName: "Matthew",
      lastName: "Rust",
      email: "matthewrust2121@gmail.com",
      cohort: "MCSP-13",
      date: "27-JUN-22",
      attempt: 99,
      pass: true,
    },
    {
      firstName: "Hung",
      lastName: "Nguyen",
      email: "hungnguyen169312@gmail.com",
      cohort: "MCSP-13",
      date: "27-JUN-22",
      attempt: 99,
      pass: true,
    },
  ]);
  return (
    <div style={{ width: 730, margin: "5% auto" }}>
      <AllRatings />
      <StudentInfo students={students} setStudents={setStudents} />
      <InterviewerReport />
    </div>
  );
};

export default InterviewDash;
