import React, { useEffect, useState } from 'react';
import Editor from '@monaco-editor/react';
import io from 'socket.io-client';
import styles from 'src/components/CodeEditor.module.css';

let socket;

export default function CodeEditor({ sessionId, candidateInfo }) {
  const [codeReturn, setCodeReturn] = useState([]);
  const [input, setInput] = useState('');
  const [room, setRoom] = useState(sessionId);

  const onChangeHandler = (content) => {
    // setInput(content);
    socket.emit('input-change', content, room);
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

    socket.on('connect', () => {
      //console.log('connected to socket');
    });

    socket.on('update-input', (msg) => {
      setInput(msg);
    });
    socket.emit('join', room, (str) => logRoomStatus(str));
  };

  function logRoomStatus(str) {
    //console.log(str);
  }

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
        onChange={onChangeHandler}
        className={styles.editor}
        value={input}
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
        {codeReturn.map((line, index) => (
          <span key={index} style={{ color: 'white' }}>{`> ${line}`}</span>
        ))}
      </code>
    </div>
  );
}
