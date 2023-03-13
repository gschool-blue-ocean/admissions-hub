import React, { useEffect, useState, useRef } from "react";
import Editor from "@monaco-editor/react";
import styles from "../../styles/Interview.module.css";

export default function CodeEditor({
  sessionId,
  input,
  input1,
  input2,
  input3,
  pNum,
  setPNum,
  role,
  changePNumHandler,
  socket,
  room,
}) {
  const [codeReturn, setCodeReturn] = useState([]);

  const editorRef = useRef(null);
  const onChangeHandler = (content) => {
    // console.log(editorRef.current.id)
    // console.log(editorRef.current.getValue());
    socket.emit("input-change", content, room);
  };
  console.log("INPUT1\n", input1);

  //monaco-editor has a weird way to edit font size; it doesn't work w/ the regular CSS way
  function setEditorFontSize(editor) {
    editorRef.current = editor;
    editorRef.current.updateOptions({ fontSize: 16 });
  }

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

  return (
    <div className={styles.editorCardBorder}>
      {!role ? (
        <div style={{ display: "flex" }}>
          <div
            className={styles.problemTab}
            id={Math.random()}
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
                className={styles.editor}
                value={input2}
                onMount={setEditorFontSize}
              />
            ) : (
              <Editor
                id="editor3"
                defaultLanguage="javascript"
                theme="vs-dark"
                onChange={onChangeHandler}
                className={styles.editor}
                value={input3}
                onMount={setEditorFontSize}
              />
            )
          ) : (
            <Editor
              id="editor1"
              defaultLanguage="javascript"
              theme="vs-dark"
              onChange={onChangeHandler}
              className={styles.editor}
              value={input1}
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
