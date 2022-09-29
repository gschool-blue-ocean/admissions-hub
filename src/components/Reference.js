import React, { useState } from "react";
import styles from "./Reference.module.css";
const Reference = () => {
  const [variables, setVariables] = useState(false);
  const [arrays, setArrays] = useState(false);
  const [operators, setOperators] = useState(false);
  const [conditionals, setConditionals] = useState(false);
  const [loops, setLoops] = useState(false);
  const [accumulator, setAccumulator] = useState(false);

  const variablesLink =
    "https://learn-2.galvanize.com/cohorts/1346/blocks/1615/content_files/08-variables/00-section-overview.md";
  const arraysLink =
    "https://learn-2.galvanize.com/cohorts/1346/blocks/1615/content_files/09-Objects/00-section-overview.md";
  const operatorsLink =
    "https://learn-2.galvanize.com/cohorts/1346/blocks/1615/content_files/10-Operators-and-Methods/00-section-overview.md";
  const conditionalsLink =
    "https://learn-2.galvanize.com/cohorts/1346/blocks/1615/content_files/11-Conditionals/00-section-overview.md";
  const loopsLink =
    "https://learn-2.galvanize.com/cohorts/1346/blocks/1615/content_files/12-loops/00-section-overview.md";
  const accumulatorLink =
    "https://learn-2.galvanize.com/cohorts/1346/blocks/1615/content_files/13-Accumulator-Pattern/00-section-overview.md";

  return (
    <div>
      <span style={{ fontSize: 15 }}>Suggested Study Material</span>

      <div className={styles.referenceGrid}>
        <div>
          <label classname={styles.container}>
            <input
              onClick={() => {
                setVariables(!variables);
                if (variables) {
                  console.log(variablesLink);
                }
              }}
              type="checkbox"
            ></input>
            Variables
            <span classname={styles.checkmark}></span>
          </label>
        </div>
        <div>
          <label classname={styles.container}>
            <input
              onClick={() => {
                setArrays(!arrays);
                if (arrays) {
                  console.log(arraysLink);
                }
              }}
              type="checkbox"
            ></input>
            Arrays & Objects
            <span classname={styles.checkmark}></span>
          </label>
        </div>
        <div>
          <label classname={styles.container}>
            <input
              onClick={() => {
                setOperators(!operators);
                if (operators) {
                  console.log(operatorsLink);
                }
              }}
              type="checkbox"
            ></input>
            Operators And Methods
            <span classname={styles.checkmark}></span>
          </label>
        </div>
        <div>
          <label classname={styles.container}>
            <input
              onClick={() => {
                setConditionals(!conditionals);
                if (conditionals) {
                  console.log(conditionalsLink);
                }
              }}
              type="checkbox"
            ></input>
            Conditionals
            <span classname={styles.checkmark}></span>
          </label>
        </div>
        <div>
          <label classname={styles.container}>
            <input
              onClick={() => {
                setLoops(!loops);
                if (loops) {
                  console.log(loopsLink);
                }
              }}
              type="checkbox"
            ></input>
            Loops
            <span classname={styles.checkmark}></span>
          </label>
        </div>
        <div>
          <label classname={styles.container}>
            <input
              onClick={() => {
                setAccumulator(!accumulator);
                if (accumulator) {
                  console.log(accumulatorLink);
                }
              }}
              type="checkbox"
            ></input>
            Accumulator Pattern
            <span classname={styles.checkmark}></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Reference;
