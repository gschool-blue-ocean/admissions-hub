import React, { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";
import Image from "next/image";

export default function RoomURL({ URL }) {
  const [clicked, setClicked] = useState(false);
  const { asPath } = useRouter();
  useEffect(() => {});

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
            overflowX: "scroll"
          }}
          onClick={handleCopy}
        >
          Copied!
        </button>
      </div>
    );
  }
  return (
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
          backgroundColor: "#F0F0F0",
          color: "#DD8D43",
          overflowX: "scroll"
        }}
        onClick={handleCopy}
      >
        <Image
          src={"/images/copy.svg"}
          alt="/"
          objectFit="contain"
          objectPosition= "50% 50%"
          width={16}
          height={17}
        />
      </button>
    </div>
  );
}
