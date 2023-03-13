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

  function handleForgot(){
      router.push('./forgetpass');
  }

  return (
    <div className={styles.logincard}>
      <div className={styles.cardLeft}>
        <div className={styles.warning}>
          <p>{warning}</p>
        </div>
        <div className={styles.cardForm}>
        <h1>Email:</h1>
          <input
            id="logEmail"
            className={styles.input}
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleEnter}
          />
          <h2>Password:</h2>
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
            <div 
              className={styles.button}
              onClick={handleForgot}
            >
              <span className={styles.buttonText}>Forgot?</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cardDivider}></div>
      <div className={styles.cardRight}>
        <img  width="250px" height="250px" src="https://www.galvanize.com/wp-content/uploads/2022/11/iStock-1190408194_750x750-1-600x600.jpg" />
      </div>
    </div>
  );
}
