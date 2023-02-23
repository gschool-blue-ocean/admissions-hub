import { useEffect, useState } from "react";
import Problems from "./Problems";
import axios from "axios";
import { useRouter } from "next/router";
import styles from "../../styles/Interview.module.css";
import Ratings from "./Ratings";

export default function NotePad({ data }) {
  const router = useRouter();
  const [problem1Notes, setProblem1Notes] = useState(data.notes_1);
  const [problem2Notes, setProblem2Notes] = useState(data.notes_2);
  const [problem3Notes, setProblem3Notes] = useState(data.notes_3);

  const [problem1Rating, setProblem1Rating] = useState(data.problem_1_rating);
  const [problem2Rating, setProblem2Rating] = useState(data.problem_2_rating);
  const [problem3Rating, setProblem3Rating] = useState(data.problem_3_rating);

  const [status, setStatus] = useState("Incomplete");

  function changeStatus() {
    const form = document.getElementById("statusToggle");
    setStatus(form.value);
  }

  function submitInterview() {
    let today = new Date();
    let body = {
      notes_1: problem1Notes,
      notes_2: problem2Notes,
      notes_3: problem3Notes,
      problem_1_rating: problem1Rating,
      problem_2_rating: problem2Rating,
      problem_3_rating: problem3Rating,
      date: today,
      state: status,
    };
    axios.patch("/api/interviews/" + data.id, body).then((result) => {
      router.push("/dashboard");
    });
  }

  return (
    <div className={styles.notePad}>
      <Problems
        problem1Notes={problem1Notes}
        problem3Notes={problem3Notes}
        problem2Notes={problem2Notes}
        setProblem1Notes={setProblem1Notes}
        setProblem2Notes={setProblem2Notes}
        setProblem3Notes={setProblem3Notes}
      />
      <Ratings
        problem1Rating={problem1Rating}
        problem2Rating={problem2Rating}
        problem3Rating={problem3Rating}
        setProblem1Rating={setProblem1Rating}
        setProblem2Rating={setProblem2Rating}
        setProblem3Rating={setProblem3Rating}
      />
      <div className={styles.questionNum}>Set Status and Submit</div>
      <div className={styles.optionsRow}>
        <form className="statusForm" onChange={changeStatus}>
          <select id="statusToggle" className={styles.statusToggle}>
            <option value="Incomplete">Incomplete</option>
            <option value="Pass">Pass</option>
            <option value="Fail">Fail</option>
          </select>
        </form>
        <div
          id="submitButton"
          className={styles.notepadButton}
          onClick={submitInterview}
        >
          Submit
        </div>
      </div>
    </div>
  );
}
