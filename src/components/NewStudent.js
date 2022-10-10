import axios from "axios";
import React from "react";
import { useState } from "react";
import * as AiIcons from "react-icons/ai";
import styles from "./AllRatings.module.css";

const NewStudent = ({
  setShowAddStudent,
  showAddStudent,
  students,
  setStudents,
}) => {
  const addCandidate = (newStudent) => {
    let paths = { params: ["POST"] };
    axios
      .post(`/api/candidate/${paths.params`, newStudent)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [cohort, setCohort] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCohortChange = (event) => {
    setCohort(event.target.value);
  };

  let newStudent = {
    first_name: firstName,
    last_name: lastName,
    email: email,
    cohort: cohort,
    date: "TBD",
    attempt: 0,
    pass: "TBD",
    notes_1: "Add Notes",
    notes_1: "Add Notes",
    notes_1: "Add Notes",
  };

  return (
    <div
      className={styles}
      style={{
        position: "fixed",
        zIndex: "1",
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
        overflow: "auto",
        backgroundColor: "rgba(0,0,0,0.4)",
      }}
    >
      <div
        style={{
          fontSize: 14,
          backgroundColor: "white",
          borderRadius: 10,
          height: "auto",
          width: 250,
          margin: "15% auto",
        }}
      >
        <div
          onClick={() => setShowAddStudent(!showAddStudent)}
          style={{ paddingLeft: 15, paddingTop: 10, cursor: "pointer" }}
        >
          <AiIcons.AiOutlineClose />
        </div>
        <div
          style={{
            marginBottom: 10,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div>
            <strong>Add New Student</strong>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              marginBottom: 10,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <input
              className={styles.input}
              placeholder="First name"
              onChange={handleFirstNameChange}
              value={firstName}
              type="text"
              required
            ></input>
          </div>
          <div
            style={{
              marginBottom: 10,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <input
              className={styles.input}
              placeholder="Last name"
              onChange={handleLastNameChange}
              value={lastName}
              type="text"
              required
            ></input>
          </div>
          <div
            style={{
              marginBottom: 10,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <input
              className={styles.input}
              placeholder="Email"
              onChange={handleEmailChange}
              value={email}
              type="text"
              required
            ></input>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: 10,
          }}
        >
          <select
            style={{
              width: 190,
              height: 30,
              backgroundColor: "#f0f0f0",
              borderRadius: "0px",
              color: "#979797",
              appearance: "none",
              paddingLeft: 3,
            }}
            onChange={handleCohortChange}
          >
            {/*          ///////////////////////////////////// INPUT/DELETE COHORTS HERE */}
            <option> Select Cohort </option>
            <option disabled>MCSP-11</option>
            <option disabled>MCSP-12</option>
            <option> MCSP-13 </option>
            <option> MCSP-14 </option>
            <option> MCSP-15 </option>
            <option> MCSP-16 </option>
            <option> MCSP-17 </option>
            <option> MCSP-18 </option>
          </select>
        </div>
        <div
          style={{
            marginBottom: 10,
            display: "flex",
            justifyContent: "center",
            paddingBottom: 10,
          }}
        >
          <button
            className={styles.bob}
            style={{
              color: "white",
              fontFamily: "League Spartan",
              backgroundColor: "#DD8D43",
              border: "none",
              width: 75,
            }}
            onClick={() => {
              addCandidate(newStudent);
              setStudents([...students, newStudent]);
              setShowAddStudent(!showAddStudent);
            }}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewStudent;
