import React, { useEffect } from 'react';
import Editor from '@monaco-editor/react';
import io from 'socket.io-client';
import { useState } from 'react';
import styles from 'src/components/CodeEditor.module.css';
import { useAppContext } from './GlobalContext';

let socket;

export default function CodeEditor({ sessionId, candidateInfo }) {
  const [codeReturn, setCodeReturn] = useState([]);
  const [input, setInput] = useState('');
  const { info, interview } = useAppContext();

  const onChangeHandler = (content) => {
    // setInput(content);
    socket.emit('input-change', content, sessionId);
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
      outputs = [err + ''];
    }
    setCodeReturn(outputs);
  }

  // Here is a function that alters the input code by changing all console logs and handles infinite loops by inserting a check variable.
  function editCode(str) {
    let output = `let breaker = 0; logs=[];` + str.replace(/console.log/g, 'logs.push');
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

  //initialized socket session
  const socketInitializer = async () => {
    await fetch('/api/socket');
    socket = io();
    socket.emit('join-room', sessionId);
    socket.on('update-input', (msg) => {
      console.log('received code update');
      setInput(msg);
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '15px 0px 15px 15px',
        border: '3px solid #979797',
        overflow: 'hidden',
      }}
    >
      <Editor
        height="650px"
        defaultLanguage="javascript"
        theme="vs-dark"
        value={input}
        onChange={(data) => onChangeHandler(data)}
        className={styles.editor}
      />
      <button
        onClick={handleRun}
        style={{
          width: 100,
          margin: '-34px 10px 0px',
          zIndex: 3,
          position: 'sticky',
          color: '#EF6E47',
          left: '100%',
          top: '100%',
          transform: 'translate(-10%, -50%)',
          backgroundColor: 'black',
          border: '2px solid #EF6E47',
          fontFamily: 'League Spartan',
        }}
      >
        Run Code
      </button>
      <code
        style={{
          background: '#1e1e1e',
          height: '250px',
          display: 'flex',
          flexDirection: 'column',
          padding: '15px',
          borderTop: '1px solid #979797',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {codeReturn.map((line) => (
          <span style={{ color: 'white' }}>{`> ${line}`}</span>
        ))}
      </code>
    </div>
  );
}
