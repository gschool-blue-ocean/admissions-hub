import React from "react";

const InterviewerReport = () => {
  return (
    <div
      style={{
        backgroundColor: "#DCDCDC",
        borderRadius: 10,
        marginTop: 10,
        padding: 10,
      }}
    >
      <span style={{ fontSize: 20 }}>Danny Andrew's Interview Report</span>
      <div
        style={{
          display: "flex",
          alignitems: "center",
          alignContent: "center",
          justifyContent: "space-between",
          paddingBottom: 20,
        }}
      >
        <div
          style={{
            borderRight: "solid gray",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 233,
          }}
        >
          {" "}
          <div style={{ fontSize: 30 }}>7</div>
          <span style={{ fontSize: 20 }}>Fiscal QTR</span>
        </div>
        <div
          style={{
            borderRight: "solid gray",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 233,
          }}
        >
          {" "}
          <div style={{ fontSize: 30 }}>7</div>
          <span style={{ fontSize: 20 }}>Fiscal Year</span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 233,
          }}
        >
          {" "}
          <div style={{ fontSize: 30 }}>150</div>
          <span style={{ fontSize: 20 }}>Lifetime</span>
        </div>
      </div>
    </div>
  );
};

export default InterviewerReport;
