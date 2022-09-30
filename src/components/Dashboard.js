import React from "react";
import Reference from "./Reference";
import Ratings from "./Ratings";
import Problems from "./Problems";

const Dashboard = () => {
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
      Dashboard
      <Problems />
      <Ratings />
      <Reference />
    </div>
  );
};

export default Dashboard;
