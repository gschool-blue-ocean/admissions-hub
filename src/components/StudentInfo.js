import React from "react";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
import { useState } from "react";

const StudentInfo = () => {
  const [search, setSearch] = useState("");

  const test = [
    {
      name: "Reaves, Kevin",
      email: "Reaveskev@gmail.com",
      cohort: "MCSP-13",
      date: "27-JUN-22",
      attempt: 99,
      pass: "FAIL",
    },
    {
      name: "Reaves, Kevin",
      email: "Reaveskev@gmail.com",
      cohort: "MCSP-13",
      date: "27-JUN-22",
      attempt: 99,
      pass: "FAIL",
    },
    {
      name: "Reaves, Kevin",
      email: "Reaveskev@gmail.com",
      cohort: "MCSP-13",
      date: "27-JUN-22",
      attempt: 99,
      pass: "FAIL",
    },
    {
      name: "Reaves, Kevin",
      email: "Reaveskev@gmail.com",
      cohort: "MCSP-13",
      date: "27-JUN-22",
      attempt: 99,
      pass: "FAIL",
    },
    {
      name: "Reaves, Kevin",
      email: "Reaveskev@gmail.com",
      cohort: "MCSP-13",
      date: "27-JUN-22",
      attempt: 99,
      pass: "FAIL",
    },
    {
      name: "Reaves, Kevin",
      email: "Reaveskev@gmail.com",
      cohort: "MCSP-13",
      date: "27-JUN-22",
      attempt: 99,
      pass: "FAIL",
    },
  ];

  const handleChange = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };

  return (
    <div
      style={{
        fontSize: 14,
        backgroundColor: "#DCDCDC",
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <input
            placeholder="Search by name or email"
            onChange={handleChange}
            value={search}
            type="text"
          ></input>
          <div>
            <BiIcons.BiSearchAlt size={28} />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              paddingRight: 20,
            }}
          >
            <button style={{ color: "white", backgroundColor: "orange" }}>
              View Notes
            </button>
          </div>
          <div
            style={{
              paddingRight: 20,
            }}
          >
            <button style={{ color: "white", backgroundColor: "orange" }}>
              Launch Interview
            </button>
          </div>
        </div>
      </div>
      <div style={{ padding: 10 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          <span> Last, First name</span>
          <span> Email Address</span>
          <span> Cohort #</span>
          <span> DD-MMM-YY</span>
          <span> Attempt #</span>
          <span> Pass</span>
        </div>
        <div
          style={{
            border: "solid 1px black",
            maxHeight: 200,
            overflowY: "auto",
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          {test.map((student) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBottom: 5,
                  paddingTop: 5,
                  borderBottom: "solid 1px black",
                }}
                key={student.name}
              >
                <span>{student.name}</span>
                <span>{student.email}</span>
                <span>{student.cohort}</span>
                <span>{student.date}</span>
                <span>{student.attempt}</span>
                <span>{student.pass}</span>
              </div>
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <BsIcons.BsPlusLg color="orange" />

            <span style={{ paddingLeft: 5 }}>add student</span>
          </div>
          <div>
            <button
              style={{
                borderRadius: 10,
                backgroundColor: "gray",
                color: "white",
              }}
            >
              export .csv
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;
