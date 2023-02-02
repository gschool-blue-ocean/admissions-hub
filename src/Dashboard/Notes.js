import { useState } from "react";
import Problems from "../Interview/Problems";
import styles from "../../styles/Interview.module.css";
import Ratings from "../Interview/Ratings";

export default function Notes({ data, setShowNotes }) {
  const [problem1Notes, setProblem1Notes] = useState(data.notes_1);
  const [problem2Notes, setProblem2Notes] = useState(data.notes_2);
  const [problem3Notes, setProblem3Notes] = useState(data.notes_3);

  const [problem1Rating, setProblem1Rating] = useState(data.problem_1_rating);
  const [problem2Rating, setProblem2Rating] = useState(data.problem_2_rating);
  const [problem3Rating, setProblem3Rating] = useState(data.problem_3_rating);

  const [status, setStatus] = useState(data.state);

  return (
    <div className={styles.notesShadow}>
      <div className={styles.noteBorder}>
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
            <div className={styles.statusStatic}>{status}</div>
            <div
              id="returnButton"
              className={styles.notepadButton}
              onClick={() => setShowNotes(false)}
            >
              Return
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
