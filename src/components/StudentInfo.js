import React, { useEffect, useState } from 'react';
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';
import * as AiIcons from 'react-icons/ai';
import * as TiIcons from 'react-icons/ti';
import Downloader from './email/Downloadcsv';

import NewStudent from './NewStudent';
import Link from 'next/link';
import uuid from 'react-uuid';
import Ratings from './Ratings';
import styles from './AllRatings.module.css';
import { useAppContext } from './GlobalContext';
import ViewProblems from './viewProblems';
import axios, { AxiosError } from 'axios';

const StudentInfo = () => {
  const { info, setInfo, setUserRole, setStudents, students, user, interview, setInterview } = useAppContext();

  const [csv, setCsv] = useState({});
  const [showExports, setShowExports] = useState(false);
  const changeUserRole = (e) => {
    setUserRole('ADMIN');
  };
  let userid;

  const changeUserRoleNew = (e) => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = today.getMonth();
    var yy = String(today.getFullYear());
    today = yy + '-' + mm + '-' + dd;

    userid = localStorage.getItem('userId');

    let newInterview = {
      interviewers_id: userid,
      candidates_id: info.id,
      notes_1: '',
      notes_2: '',
      notes_3: '',
      problem_1_rating: null,
      problem_2_rating: null,
      problem_3_rating: null,
      date: today,

      pass: 'false',
      code: '//Type code here',
      complete: false,
    };

    axios
      .post('/api/interviews/Interviews', newInterview)
      .then((returnedInfo) => {
        // console.log('returned info',returnedInfo)
      })
      .catch((error) => console.log(error.response));
    setUserRole('ADMIN');
  };
  useEffect(() => {}, [user]);

  // useEffect(() => {
  //   setInfo("");

  //   //userid = user.id
  // }, []);

  const [search, setSearch] = useState('');
  const [value, setValue] = useState(0);
  const [showAddStudent, setShowAddStudent] = useState(false);

  const [seeNotes, setSeeNotes] = useState(false);

  const updateInfo = (candidateInfo) => {
    axios
      .get('/api/candidate/Candidate')
      .then((data) => {
        // console.log('data in info', candidateInfo)
        console.log('candidate info', candidateInfo);
        setInterview(data.data.find((el) => el.id === candidateInfo));
      })
      .catch(console.log);

    setInfo({
      ...info,
      complete: false,
    });
    axios.patch('/api/interviews/Interviews', { id: info.id, complete: false }).then(console.log).catch(console.log);
  };
  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const deleteStudent = () => {
    let tempArr = [...students];
    let indexOfObject = tempArr.findIndex((object) => {
      return object.id === info.id;
    });
    tempArr.splice(indexOfObject, 1);

    setStudents(tempArr);
    axios
      .delete(`/api/candidate/${info.email}`, info.email)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  // console.log('complete?',  info)

  return (
    <div
      className={styles}
      style={{
        fontSize: 14,
        backgroundColor: '#f0f0f0',
        marginTop: 5,
        marginBottom: 5,
      }}
    >
      {seeNotes ? (
        <div
          style={{
            position: 'fixed',
            zIndex: '1',
            left: '0',
            top: '0',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            backgroundColor: 'rgb(0,0,0)',
            backgroundColor: 'rgba(0,0,0,0.4)',
          }}
        >
          <div
            style={{
              fontSize: 14,
              backgroundColor: 'white',
              borderRadius: 10,
              boxShadow: '0px 0px 10px 5px #888888',
              margin: '10% auto',
              width: 450,
              height: 'auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <div
              onClick={() => {
                setSeeNotes(!seeNotes);
              }}
              style={{
                padding: 10,
                position: 'sticky',
                left: '90%',
              }}
            >
              <AiIcons.AiOutlineClose size={25} />
            </div>
            <div
              style={{
                width: 400,
                height: 'auto',
                backgroundColor: 'white',
              }}
            >
              <div style={{ display: 'flex', paddingBottom: 10, color: '#979797' }}>
                <span
                  style={{ fontSize: 20 }}
                >{`${info.first_name} ${info.last_name}, ${info.cohort}, Attempt #: ${info.attempt}`}</span>
              </div>
              <ViewProblems /> <br></br>
              <Ratings setValue={setValue} />
            </div>
          </div>
        </div>
      ) : null}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: 10,
        }}
      >
        <div
          style={{
            display: 'flex',
          }}
        >
          <input
            placeholder="Search by name or email"
            onChange={handleChange}
            value={search}
            style={{
              height: 30,
              width: 220,
              borderRadius: 5,
              margin: 5,
              border: 'none',
              paddingLeft: '10px',
            }}
            type="text"
          ></input>
          <div style={{ cursor: 'pointer' }}>
            <BiIcons.BiSearchAlt size={28} style={{ marginTop: 5, color: '#979797' }} />
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
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
                  color: 'white',
                  border: 'none',
                  height: 40,
                  width: 100,
                  fontFamily: 'League Spartan',
                  fontSize: 16,
                }}
                className={styles.bob}
                onClick={() => {
                  setSeeNotes(!seeNotes);
                }}
              >
                View Notes
              </button>
            ) : (
              <button
                style={{
                  color: '#979797',
                  backgroundColor: '#FFE8D3',
                  border: 'none',
                  height: 40,
                  width: 100,
                  fontFamily: 'League Spartan',
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
            {info.length !== 0 && info.complete && interview ? (
              <Link href={{ pathname: '/interview', query: { id: interview.id } }}>
                <button
                  className={styles.bob}
                  onClick={(e) => {
                    // console.log('complete?', typeof info)
                    // changeUserRoleNew()
                    changeUserRole(e);
                    updateInfo();
                  }}
                  style={{
                    color: 'white',
                    border: 'none',
                    height: 40,
                    width: 150,
                    fontFamily: 'League Spartan',
                    fontSize: 16,
                  }}
                >
                  <a style={{ color: 'white' }}>Launch Interview</a>
                </button>
              </Link>
            ) : info.length !== 0 && !info.complete && interview ? (
              <Link href={{ pathname: '/interview', query: { id: interview.id } }}>
                {/* When Resume Interview is clicked, needs to check if interview is undefined,
                    If interview === undefined, do nothing
                    Else, Go to the link

                    Options to fix this: 
                    1. When a student is clicked, it will pull up latest interview
                    2. 
                */}
                <button
                  className={styles.bob}
                  onClick={(e) => {
                    changeUserRole(e);
                    updateInfo();
                  }}
                  style={{
                    color: 'white',
                    border: 'none',
                    height: 40,
                    width: 150,
                    fontFamily: 'League Spartan',
                    fontSize: 16,
                  }}
                >
                  <a style={{ color: 'white' }}>Resume Interview</a>
                </button>
              </Link>
            ) : (
              <button
                style={{
                  color: '#979797',
                  backgroundColor: '#FFE8D3',
                  border: 'none',
                  height: 40,
                  width: 150,
                  fontFamily: 'League Spartan',
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
            display: 'flex',
            width: 720,
            justifyContent: 'start',
            marginTop: '-5px',
            paddingLeft: 10,
            paddingRight: 10,
            color: '#979797',
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
              overflowX: 'hidden',
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
              justifySelf: 'right',
            }}
          >
            Pass
          </span>
        </div>

        <div
          className={styles.scroll}
          style={{
            maxHeight: 200,
            minHeight: 200,
            overflowY: 'auto',
            borderRadius: '5px',
            backgroundColor: 'white',
          }}
        >
          {students.map((student) => {
            // console.log('interviewer id', user ? user.id : 'no user', 'students interviewer', student.interviewers_id)
            //console.log(user)
            const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
            let testDate;
            if (student.date === null) {
              testDate = 'TBD';
            } else {
              testDate = student.date.slice(0, -14);
              var dd = testDate.slice(8);
              var mm = months[parseInt(testDate.slice(6, -3)) - 1];
              var yyyy = testDate.slice(0, -6);
              testDate = dd + '-' + mm + '-' + yyyy;
            }

            if (
              student.email.toLowerCase().includes(search.toLowerCase()) ||
              student.first_name.toLowerCase().includes(search.toLowerCase()) ||
              student.last_name.toLowerCase().includes(search.toLowerCase())
            ) {
              return (
                <div
                  className={styles.cell}
                  style={{
                    zIndex: 1,
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingBottom: 3,
                    paddingTop: 3,
                    borderBottom: 'solid 1px #979797',
                    backgroundColor: info.id === student.id ? '#EF6E47' : '',
                    color: info.id === student.id ? 'white' : '#979797',
                  }}
                  key={uuid()}
                  onClick={() => {
                    if (info.id === student.id) {
                      setInfo('');
                    } else {
                      // console.log('student' , student)

                      setInfo(student);
                      axios
                        .get('/api/candidate/Candidate')
                        .then((data) => {
                          // console.log('data in info', candidateInfo)
                          console.log('candidate info', student.id);
                          setInterview(data.data.find((el) => el.id === student.id));
                        })
                        .catch(console.log);
                      // updateInfo(student.id);
                    }
                  }}
                >
                  <span
                    style={{
                      minWidth: 120,
                      paddingLeft: 10,
                    }}
                  >
                    {`${student.last_name}, ${student.first_name}`}
                  </span>
                  <span style={{ width: 186 }}>{student.email}</span>
                  <span style={{ width: 70 }}>{student.cohort}</span>
                  {testDate === '04-JUL-1776' ? (
                    <span style={{ width: 85 }}>TBD</span>
                  ) : (
                    <span style={{ width: 85 }}>{testDate}</span>
                  )}
                  <span style={{ width: 11 }}>{student.attempt}</span>
                  {student.pass === 'true' ? (
                    <div style={{ width: 30 }}>
                      <AiIcons.AiOutlineCheck color={info.email === student.email ? 'white' : '#EF6E47'} />
                    </div>
                  ) : student.pass === 'false' ? (
                    <div style={{ width: 30 }}>
                      <AiIcons.AiOutlineClose color={info.email === student.email ? 'white' : '#979797'} />
                    </div>
                  ) : (
                    <span style={{ width: 30 }}>{student.pass}</span>
                  )}
                </div>
              );
            }
          })}
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '5px 10px 0px 10px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
            <div
              className={styles.icon}
              onClick={() => setShowAddStudent(!showAddStudent)}
              style={{ paddingRight: 10 }}
            >
              <TiIcons.TiUserAddOutline size={22} color="#EF6E47" />
              <span style={{ paddingLeft: 5, color: '#979797' }}>add student</span>
            </div>
            {info.length === 0 ? (
              <div style={{ cursor: 'not-allowed' }}>
                <TiIcons.TiUserDeleteOutline size={22} color="#FFE8D3" />
                <span style={{ paddingLeft: 5, color: '#979797' }}>delete student</span>
              </div>
            ) : (
              <div
                className={styles.icon}
                onClick={() => {
                  deleteStudent();
                  setInfo('');
                }}
              >
                <TiIcons.TiUserDeleteOutline size={22} color="#EF6E47" />
                <span style={{ paddingLeft: 5, color: '#979797' }}>delete student</span>
              </div>
            )}
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
              className={styles.bob}
              style={{
                borderRadius: 5,
                backgroundColor: '#979797',
                color: 'white',
                border: 'none',
                width: 169,
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
                      csv += key + (keysCounter + 1 < keysAmount ? ',' : '\r\n');
                      keysCounter++;
                    }
                  } else {
                    for (let key in students[row]) {
                      csv += students[row][key] + (keysCounter + 1 < keysAmount ? ',' : '\r\n');
                      keysCounter++;
                    }
                  }

                  keysCounter = 0;
                  setCsv(csv);
                }
                setShowExports(true);

                // Once we are done looping, download the .csv by creating a link
                // let link = document.createElement("a");
                // link.id = "download-csv";
                // link.setAttribute(
                //   "href",
                //   "data:text/plain;charset=utf-8," + encodeURIComponent(csv)
                // );
                // link.setAttribute("download", "StudentsInfo.csv");
                // document.body.appendChild(link);
                // document.querySelector("#download-csv").click();

                ////"Borrowed Code"/////
              }}
            >
              export/email student info
            </button>
            <Downloader students={students} showExport={showExports} setExport={setShowExports} csv={csv} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;
