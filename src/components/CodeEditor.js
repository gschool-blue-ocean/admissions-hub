import React, { useEffect } from 'react';
import Editor from '@monaco-editor/react';
import io from 'socket.io-client';
import axios from 'axios';
import { useState } from 'react';
import styles from 'src/components/CodeEditor.module.css';
import { JsonWebTokenError } from 'jsonwebtoken';
import { InferencePriority } from 'typescript';
import { useAppContext } from './GlobalContext';
import { userAgent } from 'next/server';

let socket;

export default function CodeEditor({ sessionId, candidateInfo }) {
  const [codeReturn, setCodeReturn] = useState([]);
  const [input, setInput] = useState('');
  const [delay, setDelay] = useState(performance.now());

  const { info, setInterview, interview } = useAppContext();

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    if (performance.now() > delay + 250) {
      // setTimeout(() => socket.emit("input-change", e, sessionId), 50)
      // Fetch update
      //console.log("interview", interview)
      // axios.patch('/api/interviews/Interviews', { code: e, id: interview.id }).then(console.log).catch(console.log);
      // socket.emit('input-change', e, sessionId);
      //setDelay(performance.now())
    }
    // console.log(e)
    // fetch('http://localhost:3050/truth',{
    //   method:'POST',
    //   mode:'cors',
    //   headers:{'Content-Type': 'application/json'},
    //   body:JSON.stringify({truth:e})
    // })
    // .then().catch(console.error)
  };

  useEffect(() => {
    // axios.get('/api/candidate/Candidate').then(data => {
    //   // console.log('data in info', candidateInfo)
    //   setInterview(data.data.find(el => el.id === candidateInfo))
    // }).catch(console.log)
    console.log('internal sessionID:', sessionId);
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
    console.log(JSON.stringify(data));
    setCodeReturn(data);
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
        value={input}
        onChange={(e) => onChangeHandler(e)}
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
        <span style={{ color: 'white' }}>{`> ${codeReturn}`}</span>
      </code>
    </div>
  );
}
