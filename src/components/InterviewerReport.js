import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAppContext } from "./GlobalContext";

const InterviewerReport = () => {
  const { user, interviewReport, setInterviewReport } = useAppContext();
  let count = 0;

  const [userId, setUserId] = useState("");
  useEffect(() => {
    if (!user)return;
    if (user.id) {
      console.log('user id interview report', user.id)
      localStorage.setItem("userId", JSON.stringify(user.id));

      setUserId(user.id);
    } else {
      if (typeof window !== "undefined") {
        if (localStorage.getItem('userId') === 'undefined' || !localStorage.getItem('userId')) {
          //log out
          localStorage.removeItem('accessToken')
          return;
        }   
        let temp = JSON.parse(localStorage.getItem("userId"));
        setUserId(temp);
    }
  }
    axios
      .get(`/api/interviews/Interviews`)
      .then(function (response) {
        //console.log('request data for interview report',response.data);
        setInterviewReport(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  interviewReport.forEach((el) => {
    if (el.interviewers_id === userId) {
      count++;
    }
  });

  return (
    <div
      style={{
        height: "144px",
        backgroundColor: "#f0f0f0",
        borderRadius: "0px 0px 10px 10px",
        marginTop: 5,
        color: "#979797",
      }}
    >
      <span style={{ fontSize: 15, marginLeft: "10px" }}>
        Danny Andrew's Interview Report
      </span>
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
          <div
            style={{
              fontSize: 64,
              fontFamily: "League Spartan",
              fontWeight: 200,
            }}
          >
            {count}
          </div>
          <span style={{ fontSize: 15, marginTop: -30 }}>Fiscal QTR</span>
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
          <div
            style={{
              fontSize: 64,
              fontFamily: "League Spartan",
              fontWeight: 200,
            }}
          >
            {count}
          </div>
          <span style={{ fontSize: 15, marginTop: -30 }}>Fiscal Year</span>
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
          <div
            style={{
              fontSize: 64,
              fontFamily: "League Spartan",
              fontWeight: 200,
            }}
          >
            {count}
          </div>
          <span style={{ fontSize: 15, marginTop: -30 }}>Lifetime</span>
        </div>
      </div>
    </div>
  );
};

export default InterviewerReport;
