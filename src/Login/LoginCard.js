import { useRouter } from 'next/router';
import { useState } from 'react';
import axios from 'axios';
import styles from '../../styles/Login.module.css';

export default function AdminLogin(props) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState('');

  function login() {
    localStorage.clear();
    setWarning('');
    axios
      .post('/api/admin', { email: email, password: password })
      .then((result) => result.data)
      .then((data) => {
        setWarning('');
        if (data.valid) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('id', data.id);
          localStorage.setItem('firstName', data.first_name);
          localStorage.setItem('lastName', data.last_name);
          router.push('/dashboard');
        } else {
          setWarning('Incorrect Email or Password');
        }
      })
      .catch((err) => {
        console.log(err);
        setWarning('Server Error');
      });
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
      <div className={styles.cardLeft}>
        <div className={styles.warning}>
          <p>{warning}</p>
        </div>
        <div className={styles.cardForm}>
          <input
            id="logEmail"
            className={styles.input}
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleEnter}
          />
          <input
            id="logPassword"
            className={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleEnter}
          />
          <div className={styles.buttonRow}>
            <div
              className={styles.button}
              onClick={handleSubmit}
              id="loginButton"
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
