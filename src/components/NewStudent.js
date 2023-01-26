import axios from "axios";
import React from "react";
import { useState } from "react";
import * as AiIcons from "react-icons/ai";
import styles from "./AllRatings.module.css";
import { useAppContext } from "./GlobalContext";
const NewStudent = ({ setShowAddStudent, showAddStudent }) => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = today.getMonth() + 1;
  var yy = String(today.getFullYear());
  today = yy + "-" + mm + "-" + dd;

  const { students, setStudents } = useAppContext();

  const addCandidate = (newStudent, interviewObj) => {
    axios
      .post(`/api/candidate/Candidate`, newStudent)
      .then(function (response) {
        let tempId = response.data[0].id;
        console.log("response ", response);
        interviewObj = {
          candidates_id: tempId,
          notes_1: null,
          notes_2: null,
          notes_3: null,
          problem_1_rating: null,
          problem_2_rating: null,
          problem_3_rating: null,
          date: today,
          attempt: 0,
          pass: "TBD",
        };

        axios
          .post(`/api/interviews/Interviews`, interviewObj)
          .then(function (res) {
            ///////////////
            axios.get(`/api/candidate/Candidate`).then((result) => {
              // console.log("ReRead new data", result);
              let temp = result.data;

              const arr = temp.reduce((result, obj) => {
                let row = result.find(
                  (x) => x.candidates_id === obj.candidates_id
                );
                if (!row) result.push({ ...obj });
                else if (parseInt(row.attempt) < parseInt(obj.attempt))
                  Object.assign(row, obj);
                return result;
              }, []);

              arr.sort(function (a, b) {
                // Turn your strings into dates, and then subtract them
                // to get a value that is either negative, positive, or zero.
                return new Date(b.date) - new Date(a.date);
              });
              setStudents(arr);
            });
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [firstNameInput, setFirstNameInput] = useState(false);
  const [lastNameInput, setLastNameInput] = useState(false);
  const [emailInput, setEmailInput] = useState(false);
  const [cohortInput, setCohortInput] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [cohort, setCohort] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
    setFirstNameInput(false);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
    setLastNameInput(false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailInput(false);
  };

  const handleCohortChange = (event) => {
    setCohort(event.target.value);
    setCohortInput(false);
  };

  const handleNewStudent = () => {
    if (firstName === "") {
      setFirstNameInput(true);
    } else if (lastName === "") {
      setLastNameInput(true);
    } else if (email === "") {
      setEmailInput(true);
    } else if (cohort === "") {
      setCohortInput(true);
    } else {
      addCandidate(newStudent, interviewObj);
      setShowAddStudent(!showAddStudent);
    }
  };

  let newStudent = {
    first_name: firstName,
    last_name: lastName,
    email: email,
    cohort: cohort,
    pass: "TBD",
  };
  let interviewObj = {
    interviewers_id: 1,
    candidates_id: "",
    notes_1: null,
    notes_2: null,
    notes_3: null,
    problem_1_rating: null,
    problem_2_rating: null,
    problem_3_rating: null,
    date: today,
    attempt: 0,
    pass: "TBD",
  };

  return (
    <div
      className={styles}
      style={{
        position: "fixed",
        zIndex: "6",
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
          {firstNameInput ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                color: "red",
              }}
            >
              <span>Please input first name!</span>
            </div>
          ) : null}
          <div
            style={{
              marginBottom: 10,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <input
              id="first-name"
              className={styles.input}
              placeholder="First name"
              onChange={handleFirstNameChange}
              value={firstName}
              type="text"
            ></input>
          </div>
          {lastNameInput ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                color: "red",
              }}
            >
              <span>Please input last name!</span>
            </div>
          ) : null}
          <div
            style={{
              marginBottom: 10,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <input
              id="last-name"
              className={styles.input}
              placeholder="Last name"
              onChange={handleLastNameChange}
              value={lastName}
              type="text"
            ></input>
          </div>
          {emailInput ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                color: "red",
              }}
            >
              <span>Please input email!</span>
            </div>
          ) : null}
          <div
            style={{
              marginBottom: 10,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <input
              id="email"
              className={styles.input}
              placeholder="Email"
              onChange={handleEmailChange}
              value={email}
              type="text"
            ></input>
          </div>
        </div>
        {cohortInput ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              color: "red",
            }}
          >
            <span>Please input cohort!</span>
          </div>
        ) : null}
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
            <option> MCSP-11</option>
            <option> MCSP-12</option>
            <option> MCSP-13 </option>
            <option> MCSP-14 </option>
            <option> MCSP-15 </option>
            <option> MCSP-16 </option>
            <option> MCSP-17 </option>
            <option id="mscp"> MCSP-18 </option>
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
              backgroundColor: "#EF6E47",
              border: "none",
              width: 75,
            }}
            onClick={() => {
              handleNewStudent();
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
