import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import io from "Socket.IO-client";
let socket;

export default function CodeEditor({ input, setInput, sessionId }) {
  // const [input, setInput] = useState("");
  const onChangeHandler = (e) => {
    setInput(e);
    socket.emit("input-change", e, sessionId);
  };

  useEffect(() => {
    console.log("internal sessionID:", sessionId);
    socketInitializer();
  }, []);

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
        width: "70%",
        height: "100%",
        paddingLeft: 20,
        paddingRight: 10,
      }}
    >
      <Editor
        height="900px"
        width="1000px"
        defaultLanguage="javascript"
        defaultValue="//start typing code here"
        theme="vs-dark"
        value={input}
        onChange={(e) => onChangeHandler(e)}
      />
    </div>
  );
}
