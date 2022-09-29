import React from "react";
import Reference from "./Reference";
import Ratings from "./Ratings";
import Problems from "./Problems";

const Dashboard = () => {
  return (
    <div
      style={{
        position: "absolute",
        right: "1%",
        width: "400px",
        border: "2px solid black",
        padding: "10px",
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
