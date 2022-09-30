import { Button } from "bootstrap";
import { NodeNextRequest } from "next/dist/server/base-http/node";
import React, { useState } from "react";
import styles from "./Reference.module.css";
const Reference = () => {
  const [variables, setVariables] = useState(false);
  const [arrays, setArrays] = useState(false);
  const [operators, setOperators] = useState(false);
  const [conditionals, setConditionals] = useState(false);
  const [loops, setLoops] = useState(false);
  const [accumulator, setAccumulator] = useState(false);
  const [extraResources, setExtraResources] = useState("");

  const handleChange = (event) => {
    setExtraResources(event.target.value);
    console.log(extraResources);
  };

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
      <div style={{ display: "flex", justifyContent: "center" }}>
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

              <span style={{ paddingLeft: 5 }} classname={styles.checkmark}>
                {" "}
                Variables
              </span>
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

              <span style={{ paddingLeft: 5 }} classname={styles.checkmark}>
                {" "}
                Arrays & Objects
              </span>
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

              <span style={{ paddingLeft: 5 }} classname={styles.checkmark}>
                {" "}
                Operators And Methods
              </span>
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

              <span style={{ paddingLeft: 5 }} classname={styles.checkmark}>
                {" "}
                Conditionals
              </span>
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

              <span style={{ paddingLeft: 5 }} classname={styles.checkmark}>
                {" "}
                Loops
              </span>
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
              <span style={{ paddingLeft: 10 }} classname={styles.checkmark}>
                Accumulator Pattern
              </span>
            </label>
          </div>
        </div>
      </div>
      <div>
        <span style={{ fontSize: 14 }}>External Link</span>
        <input
          onChange={handleChange}
          value={extraResources}
          type="text"
          style={{ width: 530, fontSize: 14 }}
        ></input>
      </div>
    </div>
  );
};

export default Reference;
