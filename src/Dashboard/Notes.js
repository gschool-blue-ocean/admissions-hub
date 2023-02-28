import { useState } from 'react';
import Problems from '../Interview/Problems';
import styles from '../../styles/Interview.module.css';
import Ratings from '../Interview/Ratings';

export default function Notes({ data, setShowNotes, toggleEditableNotes }) {
  const [problem1Notes, setProblem1Notes] = useState(data.notes_1);
  const [problem2Notes, setProblem2Notes] = useState(data.notes_2);
  const [problem3Notes, setProblem3Notes] = useState(data.notes_3);

  const [problem1Rating, setProblem1Rating] = useState(data.problem_1_rating);
  const [problem2Rating, setProblem2Rating] = useState(data.problem_2_rating);
  const [problem3Rating, setProblem3Rating] = useState(data.problem_3_rating);

  const [status, setStatus] = useState(data.state);

  function doesNothing() {}

  return (
    <div className={styles.notesShadow}>
      <div className={styles.noteBorder}>
        <div className={styles.notePad}>
          <Problems
            problem1Notes={problem1Notes}
            problem2Notes={problem2Notes}
            problem3Notes={problem3Notes}
            setProblem1Notes={doesNothing}
            setProblem2Notes={doesNothing}
            setProblem3Notes={doesNothing}
            toggleEditableNotes={toggleEditableNotes}
          />
          <Ratings
            problem1Rating={problem1Rating}
            problem2Rating={problem2Rating}
            problem3Rating={problem3Rating}
            setProblem1Rating={doesNothing}
            setProblem2Rating={doesNothing}
            setProblem3Rating={doesNothing}
          />
          <div className={styles.questionNum}></div>
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
