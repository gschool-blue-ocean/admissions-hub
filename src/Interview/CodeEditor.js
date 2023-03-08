import React, { useEffect, useState, useRef } from "react";
import Editor from "@monaco-editor/react";
import io from "socket.io-client";
import styles from "../../styles/Interview.module.css";

let socket;

export default function CodeEditor({
  sessionId,
  input1,
  setInput1,
  input2,
  setInput2,
  input3,
  setInput3,
  pNum,
  setPNum,
  role,
}) {
  const [codeReturn, setCodeReturn] = useState([]);
  const [room, setRoom] = useState(sessionId);

  // the current input in CodeEditor
  const [input, setInput] = useState("");

  // let timer;

  const onChangeHandler = (content) => {
    // add the content of the change to the input buffer
    let inputBuffer = content;

    socket.emit("input-change", inputBuffer, room);

    /* getting rid of this set-time out prevents it from freezing up; however, you'll notice more flickers*/
    // start the timer or reset it if it already exists
    // if (timer) {
    //   clearTimeout(timer);
    // }
    // timer = setTimeout(() => {
    //   // send the input buffer to the server
    //   socket.emit('input-change', inputBuffer, room);
    //   // reset the input buffer
    //   inputBuffer = '';
    // }, 250); // 250ms timer interval
  };

  useEffect(() => {
    socketInitializer();
  }, []);

  //evaluates input from code editor, sends to backend for processing, and sets return in codeReturn state
  function handleRun() {
    let outputs = [];
    try {
      outputs = new Function(editCode(input))();
    } catch (err) {
      outputs = [err + ""];
    }
    setCodeReturn(outputs);
  }

  // Here is a function that alters the input code by changing all console logs and handles infinite loops by inserting a check variable.
  function editCode(str) {
    let output =
      `let breaker = 0; logs=[];` + str.replace(/console.log/g, "logs.push");
    output = output.replace(
      /while.*({)/g,
      `$& if (breaker > 10000) {logs.push('infinite loop error');return logs;}breaker++;`
    );
    output = output.replace(
      /for.*({)/g,
      `$& if (breaker > 10000) {logs.push('Error: 10,000 loops reached');return logs;}breaker++;`
    );
    return output + `\nreturn logs;`;
  }

  // variable is accessible now from outside the socket
  useEffect(() => {
    if (input.length > 1) {
      if (pNum === 0) {
        setInput1(input);
      } else if (pNum === 1) {
        setInput2(input);
      } else if (pNum === 2) {
        setInput3(input);
      }
    }

  }, [input]);

  //initialized socket session
  const socketInitializer = async () => {
    await fetch("/api/socket");
    socket = io();
    // console.log("inside socket initializer ", pNum);
    socket.on("connect", () => {
      //console.log('connected to socket');
    });
    socket.on("update-input", (msg) => {
      setInput(msg);
    });
    socket.emit("join", room, (str) => logRoomStatus(str));
    // setInterval(() => {
    //   const start = Date.now();

    //   socket.emit("ping", () => {
    //     const duration = Date.now() - start;
    //     console.log("ping ", duration);
    //   });
    // }, 1000);
  };

  function logRoomStatus(str) {
    console.log(str);
  }

  //monaco-editor has a weird way to edit font size; it doesn't work w/ the regular CSS way
  const editorRef = useRef(null);
  function setEditorFontSize(editor, monaco) {
    editorRef.current = editor;
    editorRef.current.updateOptions({ fontSize: 16 });
  }

  return (
    <div className={styles.editorCardBorder}>
      {!role ? (
        <div style={{ display: "flex" }}>
          <div
            className={styles.problemTab}
            style={
              pNum !== 0
                ? {
                    width: "40%",
                    fontSize: "1rem",
                    borderBottom: "1px solid #ef6e47",
                  }
                : null
            }
            onClick={() => setPNum(0)}
          >
            Problem 1
          </div>
          <div
            className={styles.problemTab}
            style={
              pNum !== 1
                ? {
                    width: "40%",
                    fontSize: "1rem",
                    borderBottom: "1px solid #ef6e47",
                  }
                : null
            }
            onClick={() => setPNum(1)}
          >
            Problem 2
          </div>
          <div
            className={styles.problemTab}
            style={
              pNum !== 2
                ? {
                    width: "40%",
                    fontSize: "1rem",
                    borderBottom: "1px solid #ef6e47",
                  }
                : null
            }
            onClick={() => setPNum(2)}
          >
            Problem 3
          </div>
        </div>
      ) : null}
      <div className={styles.editorCard}>
        <div className={styles.topEditorWrapper}>
          {pNum !== 0 ? (
            pNum === 1 ? (
              <Editor
                id="editor2"
                defaultLanguage="javascript"
                theme="vs-dark"
                onChange={onChangeHandler}
                value={input2}
                className={styles.editor}
                onMount={setEditorFontSize}
              />
            ) : (
              <Editor
                id="editor3"
                defaultLanguage="javascript"
                theme="vs-dark"
                onChange={onChangeHandler}
                value={input3}
                className={styles.editor}
                onMount={setEditorFontSize}
              />
            )
          ) : (
            <Editor
              id="editor1"
              defaultLanguage="javascript"
              theme="vs-dark"
              onChange={onChangeHandler}
              value={input1}
              className={styles.editor}
              onMount={setEditorFontSize}
            />
          )}
        </div>

        <div className={styles.consoleGrid}>
          <code className={styles.console}>
            {codeReturn.map((line, index) => (
              <span key={index} style={{ color: "white" }}>{`> ${line}`}</span>
            ))}
          </code>
          <button className={styles.runButton} onClick={handleRun}>
            Run Code
          </button>
        </div>
      </div>
    </div>
  );
}
