import React, { useState } from "react";
import Reference from "./Reference";
import Ratings from "./Ratings";
import Problems from "./Problems";

const Dashboard = (input) => {
  const [value, setValue] = useState(0);
  const [problem1Notes, setProblem1Notes] = useState("");
  const [problem2Notes, setProblem2Notes] = useState("");
  const [problem3Notes, setProblem3Notes] = useState("");

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

  let postRequest = {
    totalPercent: totalPercent,
    problem1Notes: problem1Notes,
    problem2Notes: problem2Notes,
    problem3Notes: problem3Notes,
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
      style={{
        position: "absolute",
        right: "2%",
        width: "560px",
        border: "2px solid black",
        padding: "10px",
        backgroundColor: "#DCDCDC",
        borderRadius: 10,
      }}
    >
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
          paddingBottom: 5,
        }}
      >
        <button
          onClick={() => {
            console.log("postRequest", postRequest);
            console.log("Code Editor", input);
            if (Object.keys(studyMaterial).length !== 0) {
              console.log("studyMaterial", studyMaterial);
            }
          }}
          style={{
            width: 300,
            height: 50,
            color: "white",
            backgroundColor: "orange",
            border: "none",
            fontSize: 20,
          }}
        >
          Complete Interview
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
