import React from "react";

const Complete = ({ value }) => {
  let totalPercent = ((value / 12) * 100).toFixed(0);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: 5,
        paddingBottom: 5,
      }}
    >
      <button
        onClick={() => {
          console.log(totalPercent);
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
