import React, { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import Image from "next/image";
import { useAppContext } from "./GlobalContext";

export default function RoomURL({ URL }) {
  const [clicked, setClicked] = useState(false);
  const { asPath } = useRouter();
  const { info } = useAppContext();

  const handleCopy = () => {
    navigator.clipboard.writeText(asPath);
    setClicked(true);
  };

  if (clicked) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#F0F0F0",
          borderRadius: 5,
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
          }}
          onClick={handleCopy}
        >
          Copied!
        </button>
      </div>
    );
  }
  return (
    <div>
        <span style={{ fontSize: 20 }}>{`${info.firstName} ${info.lastName}, ${info.cohort}, Attempt #:`}</span>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#F0F0F0",
          borderRadius: 5,
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
