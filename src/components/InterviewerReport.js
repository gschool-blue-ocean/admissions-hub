import React from "react";

const InterviewerReport = () => {
  return (
    <div
      style={{
        height: "144px",
        backgroundColor: "#f0f0f0",
        borderRadius: "0px 0px 10px 10px",
        marginTop: 5,
        color:"#979797"
      }}
    >
      <span style={{ fontSize: 15, marginLeft: "10px" }}>Danny Andrew's Interview Report</span>
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
            borderRight: "1px solid #979797",            
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 233,
          }}
        >
          {" "}
          <div style={{ fontSize: 64, fontFamily: "League Spartan", fontWeight: 200  }}>7</div>
          <span style={{ fontSize: 15, marginTop: -30  }}>Fiscal QTR</span>
        </div>
        <div
          style={{
            borderRight: "1px solid #979797",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: 233,
          }}
        >
          {" "}
          <div style={{ fontSize: 64, fontFamily: "League Spartan", fontWeight: 200  }}>7</div>
          <span style={{ fontSize: 15, marginTop: -30  }}>Fiscal Year</span>
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
          <div style={{ fontSize: 64, fontFamily: "League Spartan", fontWeight: 200 }}>150</div>
          <span style={{ fontSize: 15, marginTop: -30 }}>Lifetime</span>
        </div>
      </div>
    </div>
  );
};

export default InterviewerReport;
