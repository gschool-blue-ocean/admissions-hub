import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Login.module.css';

export default function AdminLogin(props) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [correct, setCorrect] = useState(true);
  const [serverE, setServerE] = useState(false);

  function login() {
    setCorrect(true);
    setServerE(false);
    axios
      .post('/api/admin', { email: email, password: password })
      .then((result) => result.data)
      .then((data) => {
        setCorrect(true);
        if (data.valid) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('id', data.id);
          localStorage.setItem('firstName', data.first_name);
          localStorage.setItem('lastName', data.last_name);
          localStorage.setItem('lastName', data.last_name);
          router.push('/dashboard');
        } else {
          setCorrect(false);
        }
      })
      .catch((err) => console.log(err));
    setServerE(true);
  }

  function handleEnter(e) {
    if (e.keyCode == 13) {
      handleSubmit();
    }
  }

  function handleSubmit() {
    login();
  }

  return (
    <div className={styles.logincard}>
      {!correct && (
        <div className={styles.warning}>
          <p>***Wrong username or password</p>
        </div>
      )}
      {serverE && (
        <div className={styles.warning}>
          <p>***Could connect to server</p>
        </div>
      )}
      <div className={styles.cardLeft}>
        <div className={styles.cardForm}>
          <input
            className={styles.input}
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleEnter}
          />
          <input
            className={styles.input}
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleEnter}
          />
          <div className={styles.buttonRow}>
            <div
              className={styles.button}
              onClick={handleSubmit}
            >
              <span className={styles.buttonText}>Login!</span>
            </div>
            <div className={styles.button}>
              <span className={styles.buttonText}>Forgot?</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cardDivider}></div>
      <div className={styles.cardRight}>
        <img src="https://cdn.discordapp.com/attachments/1011712154480680960/1025120519961444472/unknown.png" />
      </div>
    </div>
  );
}