import React from "react";
import { useState } from "react";
import * as AiIcons from "react-icons/ai";

const NewStudent = ({
  setShowAddStudent,
  showAddStudent,
  students,
  setStudents,
}) => {
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
    console.log(cohort);
  };

  let newStudent = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    cohort: cohort,
    date: "TBD",
    attempt: 0,
    pass: "TBD",
  };

  return (
    <div
      style={{
        position: "fixed",
        zIndex: "1",
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
        overflow: "auto",
        backgroundColor: "rgb(0,0,0)",
        backgroundColor: "rgba(0,0,0,0.4)",
      }}
    >
      <div
        style={{
          fontSize: 14,
          backgroundColor: "#DCDCDC",
          borderRadius: 10,
          border: "1px solid",
          boxShadow: "0px 0px 10px 5px #888888",
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
              width: 170,
              height: 21,
            }}
            onChange={handleCohortChange}
          >
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
            style={{
              color: "white",
              backgroundColor: "orange",
              border: "none",
              width: 75,
            }}
            onClick={() => {
              setStudents([...students, newStudent]);
              setShowAddStudent(!showAddStudent);
              console.log(newStudent);
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
