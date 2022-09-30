import React from "react";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";
import { useState } from "react";
import NewStudent from "./NewStudent";
import Link from "next/link";
import uuid from 'react-uuid'

const StudentInfo = () => {
  const [search, setSearch] = useState("");

  const [addStudent, setAddStudent] = useState(false);

  const test = [
    {
      name: "Reaves, Kevin",
      email: "Reaveskev@gmail.com",
      cohort: "MCSP-13",
      date: "27-JUN-22",
      attempt: 99,
      pass: true,
    },
    {
      name: "Linder, Jeremy",
      email: "jeremylinder2@gmail",
      cohort: "MCSP-13",
      date: "27-JUN-22",
      attempt: 99,
      pass: false,
    },
    {
      name: "Jones, Kyle",
      email: "jones.kyle2893@gmail.com",
      cohort: "MCSP-13",
      date: "27-JUN-22",
      attempt: 99,
      pass: false,
    },
    {
      name: "Le, Thanh",
      email: "huybenpro@gmail.com",
      cohort: "MCSP-13",
      date: "27-JUN-22",
      attempt: 99,
      pass: false,
    },
    {
      name: "Rust, Matthew",
      email: "matthewrust21@gmail.com",
      cohort: "MCSP-13",
      date: "27-JUN-22",
      attempt: 99,
      pass: true,
    },
    {
      name: "Nguyen, Hung",
      email: "hungnguyen1693@gmail.com",
      cohort: "MCSP-13",
      date: "27-JUN-22",
      attempt: 99,
      pass: true,
    },
    {
      name: "Reaves, Kevin",
      email: "Reaveskev@gmail.com",
      cohort: "MCSP-13",
      date: "27-JUN-22",
      attempt: 99,
      pass: true,
    },
    {
      name: "Linder, Jeremy",
      email: "jeremylinder2@gmail",
      cohort: "MCSP-13",
      date: "27-JUN-22",
      attempt: 99,
      pass: false,
    },
    {
      name: "Jones, Kyle",
      email: "jones.kyle2893@gmail.com",
      cohort: "MCSP-13",
      date: "27-JUN-22",
      attempt: 99,
      pass: false,
    },
    {
      name: "Le, Thanh",
      email: "huybenpro@gmail.com",
      cohort: "MCSP-13",
      date: "27-JUN-22",
      attempt: 99,
      pass: false,
    },
    {
      name: "Rust, Matthew",
      email: "matthewrust21@gmail.com",
      cohort: "MCSP-13",
      date: "27-JUN-22",
      attempt: 99,
      pass: true,
    },
    {
      name: "Nguyen, Hung",
      email: "hungnguyen1693@gmail.com",
      cohort: "MCSP-13",
      date: "27-JUN-22",
      attempt: 99,
      pass: true,
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
          <div style={{ cursor: "pointer" }}>
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
            <button><Link href={{pathname: '/interview', query: {id: uuid()}}}>
            Launch Interview
            </Link></button>
          </div>
        </div>
      </div>
      <div style={{ padding: 10 }}>
        <div
          style={{
            display: "flex",
            width: 690,
            justifyContent: "space-between",
            paddingTop: 10,
            paddingLeft: 10,
            paddingRight: 10,
          }}
        >
          <span
            style={{
              minWidth: 135,
            }}
          >
            Last, First name
          </span>
          <span
            style={{
              minWidth: 195,
            }}
          >
            Email Address
          </span>
          <span
            style={{
              minWidth: 75,
            }}
          >
            Cohort #
          </span>
          <span
            style={{
              minWidth: 70,
            }}
          >
            DD-MMM-YY
          </span>
          <span style={{ minWidth: 16 }}> Attempt #</span>
          <span
            style={{
              minWidth: 16,
              paddingRight: 10,
            }}
          >
            Pass
          </span>
        </div>
        <div
          style={{
            border: "solid 1px black",
            maxHeight: 200,
            overflowY: "auto",
            paddingTop: 10,
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
                  paddingLeft: 10,
                  borderBottom: "solid 1px black",
                }}
                key={student.name}
              >
                <span
                  style={{
                    minWidth: 120,
                  }}
                >
                  {student.name}
                </span>
                <span style={{ minWidth: 186 }}>{student.email}</span>
                <span style={{ minWidth: 70 }}>{student.cohort}</span>
                <span style={{ minWidth: 80 }}>{student.date}</span>
                <span style={{ minWidth: 16, paddingRight: 10 }}>
                  {student.attempt}
                </span>
                {student.pass === true ? (
                  <div style={{ minWidth: 15 }}>
                    <AiIcons.AiOutlineCheck color="green" />
                  </div>
                ) : (
                  <div style={{ minWidth: 15 }}>
                    <AiIcons.AiOutlineClose color="red" />
                  </div>
                )}
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
          <div
            onClick={() => setAddStudent(!addStudent)}
            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <BsIcons.BsPlusLg color="orange" />

            <span style={{ paddingLeft: 5 }}>add student</span>
          </div>
          {addStudent ? (
            <NewStudent addStudent={addStudent} setAddStudent={setAddStudent} />
          ) : null}
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
