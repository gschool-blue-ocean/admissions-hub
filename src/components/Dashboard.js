import React, { useState } from "react";
import Reference from "./Reference";
import Ratings from "./Ratings";
import Problems from "./Problems";
import Complete from "./Complete";

const Dashboard = () => {
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
      <Complete
        value={value}
        problem1Notes={problem1Notes}
        problem3Notes={problem3Notes}
        problem2Notes={problem2Notes}
        variables={variables}
        arrays={arrays}
        operators={operators}
        conditionals={conditionals}
        loops={loops}
        accumulator={accumulator}
        extraResources={extraResources}
      />
    </div>
  );
};

export default Dashboard;
