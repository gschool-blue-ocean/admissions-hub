import React, { useState } from "react";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";
import NewStudent from "./NewStudent";
import Link from "next/link";
import uuid from "react-uuid";
import Problems from "./Problems";
import Ratings from "./Ratings";
import styles from "./AllRatings.module.css";
import { useAppContext } from "./GlobalContext";

const StudentInfo = ({ setStudents, students }) => {
   const { info, setInfo } = useAppContext();
   
  const [search, setSearch] = useState("");
  const [value, setValue] = useState(0);
  const [showAddStudent, setShowAddStudent] = useState(false);

  const [seeNotes, setSeeNotes] = useState(false);
  const [launchInterview, setLaunchInterview] = useState(false);
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className={styles}
      style={{
        fontSize: 14,
        backgroundColor: "#f0f0f0",
        marginTop: 5,
        marginBottom: 5,
        
      }}
    >
      {seeNotes ? (
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
              margin: "10% auto",
              width: 600,
              height: 680,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              onClick={() => {
                setSeeNotes(!seeNotes);
              }}
              style={{
                padding: 10,
                paddingLeft: 515,
              }}
            >
              <AiIcons.AiOutlineClose size={25} />
            </div>
            <div
              style={{
                width: 540,
                height: 600,
                backgroundColor: "#DCDCDC",
              }}
            >
              <div style={{ display: "flex", paddingBottom: 10 }}>
                {Object.values(info).map((info) => {
                  return (
                    <div style={{ paddingRight: 10 }}>
                      <span>{info}</span>
                    </div>
                  );
                })}
              </div>
              <Problems />
              <Ratings setValue={setValue} />
            </div>
          </div>
        </div>
      ) : null}
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
            style={{ height: 30, width: 220, borderRadius: 5, margin: 5 }}
            type="text"
          ></input>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => console.log(search)}
          >
            <BiIcons.BiSearchAlt size={28} style={{marginTop: 5, color: "#979797"}} />
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
              paddingRight: 8,
            }}
          >
            {info.length !== 0 ? (
              <button 
                style={{
                  color: "white",
                  backgroundColor: "#DD8D43",
                  border: "none",
                  height: 40,
                  width: 100,
                  fontFamily: "League Spartan",
                  fontSize: 16,
                }}
                className={styles.button}
                onClick={() => {
                  setSeeNotes(!seeNotes);
                }}
              >
                View Notes
              </button>
            ) : (
              <button
                style={{
                  color: "#979797",
                  backgroundColor: "#FFE8D3",
                  border: "none",
                  height: 40,
                  width: 100,
                  fontFamily: "League Spartan",
                  fontSize: 16,
                }}
                disabled
              >
                View Notes
              </button>
            )}
          </div>
          <div
            style={{
              paddingRight: 0,
            }}
          >
            {info.length !== 0 ? (
              <button
                style={{
                  color: "white",
                  backgroundColor: "#DD8D43",
                  border: "none",
                  height: 40,
                  width: 150,
                  fontFamily: "League Spartan",
                  fontSize: 16,
                }}
              >
                <Link href={{ pathname: "/interview", query: { id: uuid() } }}>
                  <a style={{ color: "white" }}>Launch Interview</a>
                </Link>
              </button>
            ) : (
              <button
                style={{
                  color: "#979797",
                  backgroundColor: "#FFE8D3",
                  border: "none",
                  height: 40,
                  width: 150,
                  fontFamily: "League Spartan",
                  fontSize: 16,
                }}
                disabled
              >
                Launch Interview
              </button>
            )}
          </div>
        </div>
      </div>
      <div style={{ padding: 5 }}>
        <div
          style={{
            display: "flex",
            width: 720,
            justifyContent: "start",
            marginTop: "-5px",
            paddingLeft: 10,
            paddingRight: 10,
            color: "#979797",
          }}
        >
          <span
            style={{
              width: 155,
            }}
          >
            Last, First name
          </span>
          <span
            style={{
              width: 230,
              overflowX: "hidden"
            }}
          >
            Email Address
          </span>
          <span
            style={{
              width: 114,
            }}
          >
            Cohort #
          </span>
          <span
            style={{
              width: 100,
            }}
          >
            Date
          </span>
          <span style={{ width: 70 }}> Attempt#</span>
          <span
            style={{
              justifySelf: "right"
            }}
          >
            Pass
          </span>
        </div>
        <div
          style={{
            // border: "solid 1px #979797",
            maxHeight: 200,
            overflowY: "auto",
            borderRadius: "5px",


          }}
        >
          {students.map((student) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBottom: 3,
                  paddingTop: 3,
                  // paddingLeft: 10,
                  borderBottom: "solid 1px #979797",
                  backgroundColor:
                    info.email === student.email ? "#DD8D43" : "white",
                  color: info.email === student.email ? "white" : "#979797",
                }}
                key={uuid()}
                onClick={() => {
                  if (info.email === student.email) {
                    setInfo([]);
                  } else {
                    setInfo(student);
                  }
                }}
              >
                <span
                  style={{
                    minWidth: 120,
                    paddingLeft: 10,
                  }}
                >
                  {`${student.lastName}, ${student.firstName}`}
                </span>
                <span style={{ width: 186 }}>{student.email}</span>
                <span style={{ width: 70 }}>{student.cohort}</span>
                <span style={{ width: 80 }}>{student.date}</span>
                <span style={{ width: 16 }}>
                  {student.attempt}
                </span>
                {student.pass === true ? (
                  <div style={{ width: 30 }}>
                    <AiIcons.AiOutlineCheck color={info.email === student.email ? "white" : "#DD8D43"} />
                  </div>
                ) : student.pass === false ? (
                  <div style={{ width: 30}}>
                    <AiIcons.AiOutlineClose color={info.email === student.email ? "white" : "#979797"} />
                  </div>
                ) : (
                  <span style={{ width: 30 }}>{student.pass}</span>
                )}
              </div>
            );
          })}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "5px 10px 0px 10px",
          }}
        >
          <div
            onClick={() => setShowAddStudent(!showAddStudent)}
            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <BsIcons.BsPlusLg color="#DD8D43" />

            <span style={{ paddingLeft: 5, color: "#979797" }}>add student</span>
          </div>
          {showAddStudent ? (
            <NewStudent
              students={students}
              showAddStudent={showAddStudent}
              setShowAddStudent={setShowAddStudent}
              setStudents={setStudents}
            />
          ) : null}
          <div>
            <button
              style={{
                borderRadius: 5,
                backgroundColor: "#979797",
                color: "white",
                border: "none",
                width: 80,
              }}
              onClick={() => {
                ////"Borrowed Code"/////
                let csv;

                // Loop the array of objects
                for (let row = 0; row < students.length; row++) {
                  let keysAmount = Object.keys(students[row]).length;
                  let keysCounter = 0;

                  // If this is the first row, generate the headings
                  if (row === 0) {
                    // Loop each property of the object
                    for (let key in students[row]) {
                      // This is to not add a comma at the last cell
                      // The '\r\n' adds a new line
                      csv +=
                        key + (keysCounter + 1 < keysAmount ? "," : "\r\n");
                      keysCounter++;
                    }
                  } else {
                    for (let key in students[row]) {
                      csv +=
                        students[row][key] +
                        (keysCounter + 1 < keysAmount ? "," : "\r\n");
                      keysCounter++;
                    }
                  }

                  keysCounter = 0;
                }

                // Once we are done looping, download the .csv by creating a link
                let link = document.createElement("a");
                link.id = "download-csv";
                link.setAttribute(
                  "href",
                  "data:text/plain;charset=utf-8," + encodeURIComponent(csv)
                );
                link.setAttribute("download", "StudentsInfo.csv");
                document.body.appendChild(link);
                document.querySelector("#download-csv").click();

                ////"Borrowed Code"/////
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
