import React, { useState } from "react";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
import * as AiIcons from "react-icons/ai";
import NewStudent from "./NewStudent";
import Link from "next/link";
import uuid from "react-uuid";
import Problems from "./Problems";
import Ratings from "./Ratings";
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
    <div
      style={{
        fontSize: 14,
        backgroundColor: "#DCDCDC",
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10,
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
            style={{ height: 30, width: 220 }}
            type="text"
          ></input>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => console.log(search)}
          >
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
            {info.length !== 0 ? (
              <button
                style={{
                  color: "white",
                  backgroundColor: "orange",
                  border: "none",
                  height: 40,
                  width: 100,
                }}
                onClick={() => {
                  setSeeNotes(!seeNotes);
                }}
              >
                View Notes
              </button>
            ) : (
              <button
                style={{
                  color: "#bdb6b6",
                  backgroundColor: "#ab7512",
                  border: "none",
                  height: 40,
                  width: 100,
                }}
                disabled
              >
                View Notes
              </button>
            )}
          </div>
          <div
            style={{
              paddingRight: 20,
            }}
          >
            {info.length !== 0 ? (
              <button
                style={{
                  color: "white",
                  backgroundColor: "orange",
                  border: "none",
                  height: 40,
                  width: 150,
                }}
              >
                <Link href={{ pathname: "/interview", query: { id: uuid() } }}>
                  <a style={{ color: "white" }}>Launch Interview</a>
                </Link>
              </button>
            ) : (
              <button
                style={{
                  color: "#bdb6b6",
                  backgroundColor: "#ab7512",
                  border: "none",
                  height: 40,
                  width: 150,
                }}
                disabled
              >
                Launch Interview
              </button>
            )}
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
          }}
        >
          {students.map((student) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBottom: 5,
                  paddingTop: 5,
                  paddingLeft: 10,
                  borderBottom: "solid 1px black",
                  backgroundColor:
                    info.email === student.email ? "orange" : "none",
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
                  }}
                >
                  {`${student.lastName}, ${student.firstName}`}
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
                ) : student.pass === false ? (
                  <div style={{ minWidth: 15 }}>
                    <AiIcons.AiOutlineClose color="red" />
                  </div>
                ) : (
                  <span style={{ minWidth: 15 }}>{student.pass}</span>
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
            padding: 10,
          }}
        >
          <div
            onClick={() => setShowAddStudent(!showAddStudent)}
            style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <BsIcons.BsPlusLg color="orange" />

            <span style={{ paddingLeft: 5 }}>add student</span>
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
                backgroundColor: "gray",
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
