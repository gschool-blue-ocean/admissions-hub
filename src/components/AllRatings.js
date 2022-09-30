import React from "react";

const AllRatings = () => {
  ////// Circle 1

  const Qtr = () => {
    let radius = 100;
    let stroke = 11;
    let value = 65;
    let normalizedRadius = radius - stroke * 2;
    let circumference = normalizedRadius * 2 * Math.PI;

    const strokeDashoffset = circumference - (value / 69) * circumference;

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          borderRight: "solid gray",
        }}
      >
        <span style={{ fontSize: 20 }}>Fiscal QTR</span>
        <div>
          <svg height={radius * 2} width={radius * 2}>
            <circle
              stroke="#ffd8a7"
              fill="none"
              strokeWidth={stroke}
              stroke-width={stroke}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />
            <circle
              stroke="orange"
              fill="transparent"
              strokeWidth={stroke}
              strokeDasharray={circumference + " " + circumference}
              style={{
                strokeDashoffset,
                transition: "stroke-dashoffset 0.35s",
                transform: "rotate(-90deg)",
                transformOrigin: "50% 50%",
              }}
              stroke-width={stroke}
              r={normalizedRadius}
              cx={radius}
              cy={radius}
            />
            <text
              x="50%"
              y="58%"
              text-anchor="middle"
              stroke="orange"
              strokeWidth="1px"
            >
              {((value / 69) * 100).toFixed(0)}%
            </text>
          </svg>
        </div>
        <div style={{ display: "flex", paddingRight: 30 }}>
          <div style={{ fontSize: 15, paddingRight: 30 }}>
            Total Interviews: 65
          </div>
          <div style={{ fontSize: 15 }}>Passing Interviews: 69</div>
        </div>
      </div>
    );
  };

  const Year = () => {
    let radius2 = 100;
    let stroke2 = 11;
    let value2 = 65;
    let normalizedRadius2 = radius2 - stroke2 * 2;
    let circumference2 = normalizedRadius2 * 2 * Math.PI;

    const strokeDashoffset = circumference2 - (value2 / 69) * circumference2;

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: 20 }}>Fiscal Year</span>
        <div>
          <svg height={radius2 * 2} width={radius2 * 2}>
            <circle
              stroke="#ffd8a7"
              fill="none"
              strokeWidth={stroke2}
              stroke-width={stroke2}
              r={normalizedRadius2}
              cx={radius2}
              cy={radius2}
            />
            <circle
              stroke="orange"
              fill="transparent"
              strokeWidth={stroke2}
              strokeDasharray={circumference2 + " " + circumference2}
              style={{
                strokeDashoffset,
                transition: "stroke-dashoffset 0.35s",
                transform: "rotate(-90deg)",
                transformOrigin: "50% 50%",
              }}
              stroke-width={stroke2}
              r={normalizedRadius2}
              cx={radius2}
              cy={radius2}
            />
            <text
              x="50%"
              y="58%"
              text-anchor="middle"
              stroke="orange"
              strokeWidth="1px"
            >
              {((value2 / 69) * 100).toFixed(0)}%
            </text>
          </svg>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ fontSize: 15, paddingRight: 30 }}>
            Total Interviews: 65
          </div>
          <div style={{ fontSize: 15 }}>Passing Interviews: 69</div>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#DCDCDC",
        borderRadius: 10,
        marginBottom: 10,
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
