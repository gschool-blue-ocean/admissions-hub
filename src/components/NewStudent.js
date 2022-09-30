import React from "react";
import { useState } from "react";
import * as AiIcons from "react-icons/ai";

const NewStudent = ({ setAddStudent, addStudent }) => {
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
          onClick={() => setAddStudent(!addStudent)}
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
          <div>Add New Student</div>
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
              placeholder="Cohort"
              onChange={handleCohortChange}
              value={cohort}
              type="text"
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
          <select onChange={handleCohortChange}>
            <option> MCSP-11 </option>
            <option> MCSP-12 </option>
            <option> MCSP-13 </option>
            <option> MCSP-14 </option>
            <option> MCSP-15 </option>
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
          <button onClick={() => setAddStudent(!addStudent)}>Create</button>
        </div>
      </div>
    </div>
  );
};

export default NewStudent;
