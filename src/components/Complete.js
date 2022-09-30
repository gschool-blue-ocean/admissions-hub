import React from "react";

const Complete = ({
  value,
  problem1Notes,
  problem2Notes,
  problem3Notes,
  variables,
  arrays,
  operators,
  conditionals,
  loops,
  accumulator,
  extraResources,
}) => {
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
        display: "flex",
        justifyContent: "center",
        paddingTop: 10,
        paddingBottom: 5,
      }}
    >
      <button
        onClick={() => {
          console.log("postRequest", postRequest);
          if (Object.keys(studyMaterial).length !== 0)
            console.log("studyMaterial", studyMaterial);
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
  );
};

export default Complete;
