import { useEffect, useState } from "react";
import Downloader from "./email/Downloadcsv";

import NewStudent from "./NewStudent";
import UpdateStudent from "./UpdateStudent";
import styles from "../../styles/Dashboard.module.css";
import Notes from "./Notes";
import axios from "axios";
import { useRouter } from "next/router";
import ExportModal from "./ExportModal";
import { Table } from '@nextui-org/react';


// ===== Notes =====
// state: what do we need
// 1) search box value
// 2) current student selection
// 3) state to manage interview launch button
// 4? some more to handle csv gen, possibly?

export default function DashMid(props) {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [historyToggle, setHistoryToggle] = useState(false);
  const [student, setStudent] = useState(false);
  const [archivedStudent, setArchivedStudent] = useState(false);
  const [interview, setInterview] = useState({});
  const [selectIndex, setSelectIndex] = useState(-1);
  const [showNotes, setShowNotes] = useState(false);
  const [showNewStudentForm, setShowNewStudentForm] = useState(false);
  const [showUpdateStudentForm, setShowUpdateStudentForm] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);
  const [rows, setRows] = useState([])

  function toggleCurrentOrHistory() {
    setHistoryToggle((prevState) => (prevState = !prevState));
    setStudent(false);
    setArchivedStudent(false);
    setSelectIndex(-1);
  }
  function handleSelect(index) {
    let key = Number(index.currentKey);
    if (selectIndex == key) {
      setStudent(false);
      setSelectIndex(-1);
    } else {
      setSelectIndex(key);
      setStudent(props.candidates[key]);
    }
    console.log(Number(index.currentKey), selectIndex)
  }
  function handleSelectHistory(index) {
    if (selectIndex == index) {
      setArchivedStudent(false);
      setSelectIndex(-1);
    } else {
      setSelectIndex(index);
      setArchivedStudent(props.candidatesHistory[index]);
    }
    console.log(index, selectIndex)
  }

  function genCSV() {
    ////"Borrowed Code"/////
    let csv;
    // Loop the array of objects
    for (let row = 0; row < student.length; row++) {
      let keysAmount = Object.keys(student[row]).length;
      let keysCounter = 0;
      // If this is the first row, generate the headings
      if (row === 0) {
        // Loop each property of the object
        for (let key in student[row]) {
          // This is to not add a comma at the last cell
          // The '\r\n' adds a new line
          csv += key + (keysCounter + 1 < keysAmount ? "," : "\r\n");
          keysCounter++;
        }
      } else {
        for (let key in student[row]) {
          csv +=
            student[row][key] + (keysCounter + 1 < keysAmount ? "," : "\r\n");
          keysCounter++;
        }
      }
      keysCounter = 0;
      setCsv(csv);
    }
    setShowExports(true);
  }

  function searchChange(e) {
    setSearch(e.target.value);
  }

  function filterBySearch(str) {
    if (!str) {
      return props.candidates.map((stu) => {
        return {
          key: stu.id,
          name: `${stu.last_name}, ${stu.first_name}`,
          email: stu.email,
          cohort: stu.cohort,
          last_interview: genDateString(stu.date),
          attempts: stu.attempts,
          state: stu.state
        };
        
      });
    }
    let newList = props.candidates.filter(
      (item) =>
        item.first_name.toLowerCase().includes(str.toLowerCase()) ||
        item.last_name.toLowerCase().includes(str.toLowerCase()) ||
        item.email.toLowerCase().includes(str.toLowerCase())
    );
    let arr = newList.map((stu) => {
      return {
        key: stu.id,
        name: `${stu.last_name}, ${stu.first_name}`,
        email: stu.email,
        cohort: stu.cohort,
        last_interview: genDateString(stu.date),
        attempts: stu.attempts,
        state: stu.state
      };
    });
    return arr;
  }

  function filterBySearchHistory(str) {
    if (!str) {
      return props.candidatesHistory.map((stu) => {
        return {
          key: stu.id,
          name: `${stu.last_name}, ${stu.first_name}`,
          email: stu.email,
          cohort: stu.cohort,
          last_interview: genDateString(stu.date),
          attempts: stu.attempts,
          state: stu.state
        };
        
      });
    }
    let newList = props.candidatesHistory.filter(
      (item) =>
        item.first_name.toLowerCase().includes(str.toLowerCase()) ||
        item.last_name.toLowerCase().includes(str.toLowerCase()) ||
        item.email.toLowerCase().includes(str.toLowerCase())
    );
    let arr = newList.map((stu) => {
      return {
        key: stu.id,
        name: `${stu.last_name}, ${stu.first_name}`,
        email: stu.email,
        cohort: stu.cohort,
        last_interview: genDateString(stu.date),
        attempts: stu.attempts,
        state: stu.state
      };
    });
    return arr;
  }

  function archiveStudent() {
    if (
      confirm(
        `Are you sure you want to archive ${student.first_name} ${student.last_name}?`
      )
    ) {
      axios
        .delete("/api/candidate/" + student.id)
        .then((result) => result.data)
        .then((data) => {
          setStudent(false);
          setSelectIndex(-1);
          props.getCandidates();
          props.getArchivedCandidates();
        });
    }
  }

  function deleteStudentPermanently() {
    if (
      confirm(
        `Are you sure you want to delete ${archivedStudent.first_name} ${archivedStudent.last_name} from the archive? This is permanent.`
      )
    ) {
      axios
        .delete("/api/candidate-history/" + archivedStudent.id)
        .then((result) => result.data)
        .then((data) => {
          setStudent(false);
          setSelectIndex(-1);
          props.getCandidates();
          props.getArchivedCandidates();
        });
    }
  }

  function newInterview() {
    let interviewer_id = localStorage.getItem("id");
    let candidate_id = student.id;
    axios
      .post("/api/interviews/new", { interviewer_id, candidate_id })
      .then((result) => result.data)
      .then((data) => router.push("/interview/" + data.id));
  }

  function resumeInterview() {
    router.push("/interview/" + student.interview_id);
  }

  function getNotesData() {
    let interviewer_id = localStorage.getItem("id");
    let candidate_id = student.id;
    axios
      .post("/api/interviews/resume", { interviewer_id, candidate_id })
      .then((result) => result.data)
      .then((data) => {
        setShowNotes(true);
        setInterview(data);
      });
  }

  function genDateString(data) {
    const date = new Date(data);
    const string = date.toLocaleDateString("en-us", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
    if (string == "Dec 31, 1969") return "No interviews";
    return string;
  }
  const columns = [
    {
      key: "name",
      label: "Last, First name",
    },
    {
      key: "email",
      label: "Email Address",
    },
    {
      key: "cohort",
      label: "Cohort",
    },
    {
      key: "last_interview",
      label: "Last Interview",
    },
    {
      key: "attempts",
      label: "Attempt",
    },
    {
      key: "state",
      label: "STATUS",
    },
  ];
  const ghjrows = [
    {
      key: "1",
      name: "Tony Reichert",
      email: "CEO",
      cohort: "MCSP-17",
      last_interview: "",
      attempts: 3,
      status: "Active",
    },
    {
      key: "2",
      name: "Zoey Lang",
      role: "Technical Lead",
      status: "Paused",
    },
    {
      key: "3",
      name: "Jane Fisher",
      role: "Senior Developer",
      status: "Active",
    },
    {
      key: "4",
      name: "William Howard",
      role: "Community Manager",
      status: "Vacation",
    },
  ];

  

  return (
    <div className={styles.dashMid}>
      <div className={styles.optionsRow}>
        <div className={styles.searchBox}>
          <input
            className={styles.searchInput}
            placeholder="Search for a candidate"
            onChange={(e) => searchChange(e)}
            value={search}
            type="text"
          />
          <div className={styles.searchIcon}></div>
        </div>

        <div className={styles.buttonsRow}>
          {student && student.attempts > 0 ? (
            <div
              id="notesButton"
              className={styles.launchButton}
              onClick={() => getNotesData()}
            >
              View Notes
            </div>
          ) : null}
          {student ? (
            student.state == "Incomplete" ? (
              <div className={styles.launchButton} onClick={resumeInterview}>
                Resume Interview
              </div>
            ) : student.state == null ? (
              <div
                id="launchButton"
                className={styles.launchButton}
                onClick={newInterview}
              >
                Launch Interview
              </div>
            ) : student.state == "Pass" ? (
              <div
                id="launchButton"
                className={styles.launchButton}
                onClick={resumeInterview}
              >
                View Interview
              </div>
            ) : (
              <div
                id="launchButton"
                className={styles.launchButton}
                onClick={newInterview}
              >
                Launch New Interview
              </div>
            )
          ) : (
            <div className={styles.tipBox}>
              Select a Candidate to Get Started
            </div>
          )}
        </div>
      </div>
      <div className={styles.tableTitles}>
        <span
          style={{
            width: "160px",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          Last, First name
        </span>
        <span
          style={{
            width: "160px",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          Email Address
        </span>
        <span style={{ width: "80px" }}>Cohort</span>
        <span style={{ width: "100px" }}>Last Interview</span>
        <span style={{ width: "20px", textAlign: "right" }}>Attempt</span>
        <span style={{ width: "80px", textAlign: "right" }}>Status</span>
      </div>

      {historyToggle ? (
        // history================================================================
        <div className={styles.candidates}>
          {filterBySearchHistory(search).map((item, index) => (
            <div
              className={
                styles[selectIndex === index ? "selectedRow" : "candidateRow"]
              }
              onClick={() => handleSelectHistory(index)}
              key={index}
            >
              <span
                style={{
                  width: "160px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
                id="studentName"
              >
                {item.last_name}, {item.first_name}
              </span>
              <span
                style={{
                  width: "160px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {item.email}
              </span>
              <span style={{ width: "80px" }}>{item.cohort}</span>
              <span style={{ width: "100px" }}>{genDateString(item.date)}</span>
              <span style={{ width: "20px", textAlign: "right" }}>
                {item.attempts}
              </span>
              <span style={{ width: "80px", textAlign: "right" }}>
                {item.state}
              </span>
            </div>
          ))}
        </div>
      ) : (
        //current
        // <div className={styles.candidates}>
        //   {filterBySearch(search).map((item, index) => (
        //     <div
        //       className={
        //         styles[selectIndex === index ? "selectedRow" : "candidateRow"]
        //       }
        //       onClick={() => handleSelect(index)}
        //       key={index}
        //     >
        //       <span
        //         style={{
        //           width: "160px",
        //           overflow: "hidden",
        //           textOverflow: "ellipsis",
        //         }}
        //         id="studentName"
        //       >
        //         {item.last_name}, {item.first_name}
        //       </span>
        //       <span
        //         style={{
        //           width: "160px",
        //           overflow: "hidden",
        //           textOverflow: "ellipsis",
        //         }}
        //       >
        //         {item.email}
        //       </span>
        //       <span style={{ width: "80px" }}>{item.cohort}</span>
        //       <span style={{ width: "100px" }}>{genDateString(item.date)}</span>
        //       <span style={{ width: "20px", textAlign: "right" }}>
        //         {item.attempts}
        //       </span>
        //       <span style={{ width: "80px", textAlign: "right" }}>
        //         {item.state}
        //       </span>
        //     </div>
        //   ))}
        // </div>
        <>
        <Table
          aria-label="Example table with dynamic content"
          striped
          bordered
          shadow={true}
          lined
          color="warning"
          css={{
            height: "auto",
            minWidth: "100%",
          }}
          selectionMode="single"
          onSelectionChange={(key) => handleSelect(key)}
        >
          <Table.Header columns={columns}>
            {(column) => (
              <Table.Column key={column.key}>{column.label}</Table.Column>
            )}
          </Table.Header>
          <Table.Body items={filterBySearch(search)}>
            {(item) => (
              <Table.Row key={item.key}>
                {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
              </Table.Row>
            )}
          </Table.Body>
        </Table>
        </>
      )}

      {       /* {kiiiiij                              hifghjkgfghjbknhgfchvbjnfcgv} */}

      <div className={styles.optionsRow}>
        <div className={styles.buttonsRow}>
          <button
            className={styles.launchButton}
            onClick={() => toggleCurrentOrHistory()}
          >
            {!historyToggle ? "View Archive" : "View Current"}
          </button>
          {!historyToggle ? (
            <div
              className={styles.launchButton}
              onClick={() => setShowNewStudentForm(true)}
              id="addStudent"
            >
              Add Student
            </div>
          ) : null}
          {student && !historyToggle ? (
            <>
              <div
                id="updateStudent"
                className={styles.launchButton}
                onClick={() => setShowUpdateStudentForm(true)}
              >
                Update Student
              </div>
              <div
                id="archiveStudent"
                className={styles.launchButton}
                onClick={archiveStudent}
              >
                Archive Student
              </div>
            </>
          ) : null}
          {archivedStudent && historyToggle ? (
            <div
              id="deleteStudent"
              className={styles.launchButton}
              onClick={deleteStudentPermanently}
            >
              Delete Student
            </div>
          ) : null}
        </div>
        {!historyToggle && props.candidates.length != 0 ? (
          <div>
            <button
              className={styles.launchButton}
              onClick={() => setShowExportModal(true)}
            >
              Export Current Info
            </button>
          </div>
        ) : (
          <div>
            <button
              className={styles.launchButton}
              onClick={() => setShowExportModal(true)}
            >
              Export Archive
            </button>
          </div>
        )}
        {showNewStudentForm && (
          <NewStudent
            setShowNewStudentForm={setShowNewStudentForm}
            setSelectIndex={setSelectIndex}
            getCandidates={props.getCandidates}
          />
        )}
        {showUpdateStudentForm && (
          <UpdateStudent
            setShowUpdateStudentForm={setShowUpdateStudentForm}
            getCandidates={props.getCandidates}
            student={student}
          />
        )}
        {showNotes && <Notes setShowNotes={setShowNotes} data={interview} />}
        {showExportModal && (
          <ExportModal
            setShowExportModal={setShowExportModal}
            students={props.candidates}
            archivedStudents={props.candidatesHistory}
            historyToggle={historyToggle}
          />
        )}
      </div>
    </div>
  );
}
