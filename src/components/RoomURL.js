import React, { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import Image from "next/image";
import { useAppContext } from "./GlobalContext";

export default function RoomURL({ URL }) {
  const [clicked, setClicked] = useState(false);
  const { asPath } = useRouter();
  const { info } = useAppContext();

  const handleCopy = () => {
    let url = "https://blueoceanadmissionshub.onrender.com" + asPath;
    navigator.clipboard.writeText(url);
    setClicked(true);
  };

  const [studentInfo, setStudentInfo] = useState("");
  useEffect(() => {
    if (info.length !== 0) {
      localStorage.setItem("info", JSON.stringify(info));
      setStudentInfo(info);
    } else {
      if (typeof window !== "undefined") {
        let temp = JSON.parse(localStorage.getItem("info"));
        setStudentInfo(temp);
      }
    }
  }, []);

  if (clicked) {
    return (
      <>
        <span
          style={{ fontSize: 20 }}
        >{`${studentInfo.first_name} ${studentInfo.last_name}, ${studentInfo.cohort}, Attempt #: ${studentInfo.attempt}`}</span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#F0F0F0",
            borderRadius: 5,
            fontSize: 12,
            height: 35,
            width: 400,
            justifyContent: "center",
          }}
        >
          <div>Room URL: {asPath}</div>
          <button
            style={{
              border: "none",
              display: "flex",
              height: 15,
              alignItems: "center",
              backgroundColor: "#F0F0F0",
              overflowX: "scroll",
            }}
            onClick={handleCopy}
          >
            Copied!
          </button>
        </div>
      </>
    );
  }
  return (
    <div>
      <span
        style={{ fontSize: 20 }}
      >{`${studentInfo.first_name} ${studentInfo.last_name}, ${studentInfo.cohort}, Attempt #: ${studentInfo.attempt}`}</span>
      <div
        style={{
          display: "flex",
          backgroundColor: "#F0F0F0",
          color: "#979797",
          overflowX: "scroll",
          alignItems: "center",
          borderRadius: 5,
          fontSize: 12,
          height: 35,
          width: 370,
          justifyContent: "center",
        }}
      >
        <div>Room URL: {asPath}</div>
        <button
          style={{
            border: "none",
            display: "flex",
            height: 15,
            backgroundColor: "#F0F0F0",
          }}
          onClick={handleCopy}
        >
          <Image
            src={"/images/copy.svg"}
            alt="/"
            objectFit="contain"
            objectPosition="bottom center"
            width={15}
            height={15}
          />
        </button>
      </div>
    </div>
  );
}
