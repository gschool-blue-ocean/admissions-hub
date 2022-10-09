import React, { useState } from "react";
import Reference from "./Reference";
import Ratings from "./Ratings";
import Problems from "./Problems";
import styles from "./AllRatings.module.css";
import RoomURL from "./RoomURL";
import axios from "axios";
import { useRouter } from "next/router";
import { useAppContext } from "./GlobalContext";

const Dashboard = ({ input }) => {
  const [value, setValue] = useState(0);
  const [problem1Notes, setProblem1Notes] = useState("");
  const [problem2Notes, setProblem2Notes] = useState("");
  const [problem3Notes, setProblem3Notes] = useState("");
  const { info, setInfo } = useAppContext();

  const [variables, setVariables] = useState(false);
  const [arrays, setArrays] = useState(false);
  const [operators, setOperators] = useState(false);
  const [conditionals, setConditionals] = useState(false);
  const [loops, setLoops] = useState(false);
  const [accumulator, setAccumulator] = useState(false);
  const [extraResources, setExtraResources] = useState("");

  let totalPercent = `${((value / 12) * 100).toFixed(0)}%`;

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

  let passOrFail;
  if (((value / 12) * 100).toFixed(0) >= 70) {
    passOrFail = true;
  } else {
    passOrFail = false;
  }

  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mmm = months[today.getMonth()];
  var yy = String(today.getFullYear()).slice(2);
  today = dd + "-" + mmm + "-" + yy;

  let numAttempt = Number(info.attempt);

  let patchRequest = {
    date: today,
    attempt: numAttempt + 1,
    pass: passOrFail,
    notes_1: problem1Notes,
    notes_2: problem2Notes,
    notes_3: problem3Notes,
  };

  const router = useRouter();

  const completeInterview = (patchRequest) => {
    axios
      .patch(`/api/candidate/${info.email}`, patchRequest)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  let studyMaterial = {};

  if (variables) {
    studyMaterial.variables = variablesLink;
  }
  if (arrays) {
    studyMaterial.arrays = arraysLink;
  }
  if (operators) {
    studyMaterial.operators = operatorsLink;
  }
  if (conditionals) {
    studyMaterial.conditionals = conditionalsLink;
  }
  if (loops) {
    studyMaterial.loops = loopsLink;
  }
  if (accumulator) {
    studyMaterial.accumulator = accumulatorLink;
  }
  if (extraResources !== "") {
    studyMaterial.extraResources = extraResources;
  }
  return (
    <div
      className={styles}
      style={{
        // float: "right",
        width: "420px",
        height: "100%",
        zIndex: "1",
        padding: "10px 10px 0px",
        position: "sticky",
        backgroundColor: "white",
      }}
    >
      {/* <RoomURL /> */}
      <Problems
        problem1Notes={problem1Notes}
        problem3Notes={problem3Notes}
        problem2Notes={problem2Notes}
        setProblem1Notes={setProblem1Notes}
        setProblem2Notes={setProblem2Notes}
        setProblem3Notes={setProblem3Notes}
      />
      <Ratings setValue={setValue} />
      <Reference
        variables={variables}
        arrays={arrays}
        setVariables={setVariables}
        setArrays={setArrays}
        operators={operators}
        setOperators={setOperators}
        conditionals={conditionals}
        setConditionals={setConditionals}
        loops={loops}
        setLoops={setLoops}
        accumulator={accumulator}
        setAccumulator={setAccumulator}
        extraResources={extraResources}
        setExtraResources={setExtraResources}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: 10,
          paddingBottom: 2,
        }}
      >
        <button
          className={styles.bob}
          id={styles.complete}
          onClick={() => {
            console.log("patchRequest", patchRequest);
            console.log("Code Editor", input);
            completeInterview(patchRequest);
            if (Object.keys(studyMaterial).length !== 0) {
              console.log("studyMaterial", studyMaterial);
            }
            router.push("../dashboard");
          }}
          style={{
            width: 220,
            height: 40,
            color: "white",
            backgroundColor: "#DD8D43",
            border: "none",
            fontSize: 16,
            fontFamily: "League Spartan",
          }}
        >
          Complete Interview
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
