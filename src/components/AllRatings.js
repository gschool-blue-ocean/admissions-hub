import React from "react";
import styles from "./AllRatings.module.css";
import { useAppContext } from "./GlobalContext";

const AllRatings = () => {
  ////// Circle 1
  let passing = 0;
  let totalInterviews = 0;
  const { interviewReport } = useAppContext();

  interviewReport.forEach((el) => {
    if (el.pass === "true") {
      passing++;
      totalInterviews++;
    } else if (el.pass === "false") {
      totalInterviews++;
    }
  });

  const Qtr = () => {
    let radius = 92;
    let stroke = 15;
    let value = passing;
    let normalizedRadius = radius - stroke * 2;
    let circumference = normalizedRadius * 2 * Math.PI;

    const strokeDashoffset =
      circumference - (value / totalInterviews) * circumference;

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          borderRight: "1px solid #979797",
        }}
      >
        <span style={{ fontSize: 20, color: "#979797" }}>Fiscal QTR</span>
        <div className={styles.circles}>
          <svg height={radius * 2} width={radius * 2}>
            <circle
              stroke="#ffd8a7"
              fill="none"
              strokeWidth={stroke}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />
            <circle
              stroke="#DD8D43"
              fill="transparent"
              strokeWidth={stroke}
              strokeDasharray={circumference + " " + circumference}
              style={{
                strokeDashoffset,
                transition: "stroke-dashoffset 0.35s",
                transformOrigin: "50% 50%",
              }}
              rotate="180deg"
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />
            <text
              x="50%"
              y="56%"
              textAnchor="middle"
              fill="#DD8D43"
              strokeWidth="1px"
              fontSize={36}
              fontFamily={"League Spartan"}
              fontWeight={300}
            >
              {((value / totalInterviews) * 100).toFixed(0)}%
            </text>
          </svg>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div style={{ fontSize: 15, paddingRight: 30, color: "#979797" }}>
            Total Interviews: {totalInterviews}
          </div>
          <div style={{ fontSize: 15, color: "#979797" }}>
            Passing Interviews: {passing}
          </div>
        </div>
      </div>
    );
  };

  const Year = () => {
    let radius2 = 92;
    let stroke2 = 15;
    let value2 = passing;
    let normalizedRadius2 = radius2 - stroke2 * 2;
    let circumference2 = normalizedRadius2 * 2 * Math.PI;

    const strokeDashoffset =
      circumference2 - (value2 / totalInterviews) * circumference2;

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: 20, color: "#979797" }}>Fiscal Year</span>
        <div>
          <svg height={radius2 * 2} width={radius2 * 2}>
            <circle
              stroke="#ffd8a7"
              fill="none"
              strokeWidth={stroke2}
              r={normalizedRadius2}
              cx={radius2}
              cy={radius2}
            />
            <circle
              stroke="#DD8D43"
              fill="transparent"
              strokeWidth={stroke2}
              strokeDasharray={circumference2 + " " + circumference2}
              style={{
                strokeDashoffset,
                transition: "stroke-dashoffset 0.35s",
                transformOrigin: "50% 50%",
              }}
              r={normalizedRadius2}
              cx={radius2}
              cy={radius2}
            />
            <text
              x="50%"
              y="56%"
              textAnchor="middle"
              fill="#DD8D43"
              strokeWidth="1px"
              fontSize={36}
              fontFamily={"League Spartan"}
              fontWeight={300}
            >
              {((value2 / totalInterviews) * 100).toFixed(0)}%
            </text>
          </svg>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div style={{ fontSize: 15, paddingRight: 30, color: "#979797" }}>
            Total Interviews: {totalInterviews}
          </div>
          <div style={{ fontSize: 15, color: "#979797" }}>
            Passing Interviews: {passing}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#f0f0f0",
        borderRadius: "10px 10px 0px 0px",
        marginBottom: 5,
      }}
    >
      <div style={{ width: 365 }}>
        <Qtr />
      </div>
      <div style={{ width: 365 }}>
        <Year />
      </div>
    </div>
  );
};

export default AllRatings;
