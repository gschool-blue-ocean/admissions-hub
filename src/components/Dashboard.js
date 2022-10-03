import React, { useState } from "react";
import Reference from "./Reference";
import Ratings from "./Ratings";
import Problems from "./Problems";
import Complete from "./Complete";

const Dashboard = ({user}) => {
  const [value, setValue] = useState(0);
  if (user) {
    return (
      <div
        style={{
          width: "560px",
          border: "2px solid black",
          padding: "10px",
          backgroundColor: "#DCDCDC",
          borderRadius: 10,
        }}
      >
        <Problems />
        <Ratings value={value} setValue={setValue} />
        <Reference />
        <Complete value={value} />
      </div>
    );
  }
  
};

export default Dashboard;
