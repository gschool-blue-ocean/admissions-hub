import React from "react";

const StudentInfo = () => {
  return (
    <div style={{ fontSize: 14 }}>
      StudentInfo
      <div
        style={{
          display: "flex",
          width: 1250,
          justifyContent: "space-between",
        }}
      >
        <input></input>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button>View Notes</button>
          <button>Launch Interview</button>
        </div>
      </div>
    </div>
  );
};

export default StudentInfo;
