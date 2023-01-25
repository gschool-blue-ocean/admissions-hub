import React, { useEffect } from 'react';
import Editor from '@monaco-editor/react';
import io from 'socket.io-client';
import axios from 'axios';
import { useState } from 'react';
import styles from 'src/components/CodeEditor.module.css';
import { useAppContext } from './GlobalContext';

let socket;

export default function CodeEditor({ sessionId, candidateInfo }) {
  const [codeReturn, setCodeReturn] = useState([]);
  const [input, setInput] = useState('');
  const { info, setInterview, interview } = useAppContext();

  const onChangeHandler = (content) => {
    setInput(content);
    socket.emit('input-change', content, sessionId);
  };

  useEffect(() => {
    // console.log('internal sessionID:', sessionId);
    socketInitializer();
  }, []);

  useEffect(() => {
    console.log('interview changed', interview ? interview.code : 'no interview code');
  }, [interview]);

  //evaluates input from code editor, sends to backend for processing, and sets return in codeReturn state
  const handleRun = async (input) => {
    const data = await axios.post('/api/codeEval', {
      code: input,
    });
    //console.log(data.data);
    setCodeReturn(data.data);
  };

  //initialized socket session
  const socketInitializer = async () => {
    await fetch('/api/socket');
    socket = io();

    socket.emit('join-room', sessionId);
    socket.on('connect', () => {
      console.log(`connected with user ${sessionId}`);
    });
    socket.on('update-input', (msg) => {
      setInput(msg);
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '15px 0px 15px 15px',
        // borderRadius: "10px",
        border: '3px solid #979797',
        overflow: 'hidden',
      }}
    >
      <Editor
        height="650px"
        defaultLanguage="javascript"
        defaultValue={info.code}
        theme="vs-dark"
        value={input ? input : interview ? interview.code : '//No Code'}
        onChange={(data) => onChangeHandler(data)}
        className={styles.editor}
      />
      <button
        onClick={() => handleRun(input)}
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
