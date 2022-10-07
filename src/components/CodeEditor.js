import React, { useEffect } from "react";
import Editor from "@monaco-editor/react";
import io from "Socket.IO-client";
import axios from "axios";
import { useState } from "react";
let socket;

export default function CodeEditor({ input, setInput, sessionId }) {
  const [codeReturn, setCodeReturn] = useState([]);

  const onChangeHandler = (e) => {
    setInput(e);
    socket.emit("input-change", e, sessionId);
  };

  useEffect(() => {
    console.log("internal sessionID:", sessionId);
    socketInitializer();
  }, []);

  //evaluates input from code editor, sends to backend for processing, and sets return in codeReturn state
  const handleRun = async (input) => {
    const data = await axios.post("/api/codeEval", {
      code: input,
    });
    console.log(data.data);
    setCodeReturn(data.data);
  };

  //initialized socket session
  const socketInitializer = async () => {
    await fetch("/api/socket");
    socket = io();

    socket.emit("join-room", sessionId);
    socket.on("connect", () => {
      console.log(`connected with user ${sessionId}`);
    });
    socket.on("update-input", (msg) => {
      setInput(msg);
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "70%",
        height: "80",
        padding: 20,
      }}
    >
      <Editor
        style={{ width: "auto", height: "auto" }}
        defaultLanguage="javascript"
        defaultValue="//start typing code here"
        theme="vs-dark"
        value={input}
        onChange={(e) => onChangeHandler(e)}
      />
      <button onClick={() => handleRun(input)}>Run</button>
      <div
        style={{
          background: "black",
          width: "full",
          height: "120px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {codeReturn.map((line) => (
          <span style={{ color: "white" }}>{`> ${line}`}</span>
        ))}
      </div>
    </div>
  );
}
