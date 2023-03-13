import { useState } from "react";
import styles from "../../styles/Interview.module.css";
import Image from "next/image";

export default function Problems({
  problem1,
  problem2,
  problem3,
  problem1Notes,
  problem2Notes,
  problem3Notes,
  setProblem1Notes,
  setProblem2Notes,
  setProblem3Notes,
  toggleEditableNotes,
  pNum,
  changePNumHandler={changePNumHandler}
}) {

  return (
    <div className={styles.problems}>
      <div className={styles.problemTabsRow}>
        <div
          className={styles.problemTab}
          style={
            pNum !== 0
              ? {
                  width: "40%",
                  fontSize: "1rem",
                  borderBottom: "1px solid #ef6e47",
                }
              : null
          }
          onClick={() => changePNumHandler(0)}
        >
          Problem 1
        </div>
        <div
          className={styles.problemTab}
          style={
            pNum !== 1
              ? {
                  width: "40%",
                  fontSize: "1rem",
                  borderBottom: "1px solid #ef6e47",
                }
              : null
          }
          onClick={() => changePNumHandler(1)}
        >
          Problem 2
        </div>
        <div
          className={styles.problemTab}
          style={
            pNum !== 2
              ? {
                  width: "40%",
                  fontSize: "1rem",
                  borderBottom: "1px solid #ef6e47",
                }
              : null
          }
          onClick={() => changePNumHandler(2)}
        >
          Problem 3
        </div>
      </div>
      {pNum == 0 ? (
        <div className={styles.problemCard}>
          <div className={styles.problemText}>
            <span className={styles.questionNum}>Question 1:</span> {problem1.question}
          </div>
          <pre className={styles.codeExample}>{problem1.code}</pre>
          <div className={styles.problemText}>
            <span className={styles.questionNum}>Notes:</span>
          </div>

          {!toggleEditableNotes ? (
            <div className={styles.notesArea} rows={20}>
              {problem1Notes}
            </div>
          ) : (
            <textarea
              id="problem1Notes"
              className={styles.notesArea}
              rows={20}
              value={problem1Notes}
              onChange={(e) => setProblem1Notes(e.target.value)}
            ></textarea>
          )}
        </div>
      ) : null}
      {pNum == 1 ? (
        <div className={styles.problemCard}>
          <div className={styles.problemText}>
            <span className={styles.questionNum}>Question 2:</span> {problem2.question}
          </div>
          <pre className={styles.codeExample}>{problem2.code}</pre>
          <div className={styles.problemText}>
            <span className={styles.questionNum}>Notes:</span>
          </div>

          {!toggleEditableNotes ? (
            <div className={styles.notesArea} rows={20}>
              {problem2Notes}
            </div>
          ) : (
            <textarea
              className={styles.notesArea}
              rows={20}
              value={problem2Notes}
              onChange={(e) => setProblem2Notes(e.target.value)}
            ></textarea>
          )}
        </div>
      ) : null}
      {pNum == 2 ? (
        <div className={styles.problemCard}>
          <div className={styles.problemText}>
            <span className={styles.questionNum}>Question 3:</span> {problem3.question}
          </div>
          <pre className={styles.codeExample}>{problem3.code}</pre>
          <div className={styles.problemText}>
            <span className={styles.questionNum}>Notes:</span>
          </div>

          {!toggleEditableNotes ? (
            <div className={styles.notesArea} rows={20}>
              {problem3Notes}
            </div>
          ) : (
            <textarea
              className={styles.notesArea}
              rows={20}
              value={problem3Notes}
              onChange={(e) => setProblem3Notes(e.target.value)}
            ></textarea>
          )}
        </div>
      ) : null}
    </div>
  );
}
