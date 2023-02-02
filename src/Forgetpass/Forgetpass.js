import { useState } from 'react';
import styles from '../../styles/Dashboard.module.css';
import { useRouter } from 'next/router';
import axiosNodemailer from './axiosNodemailer.mjs';
import { createContext, useContext } from 'react';
const AppContext = createContext();

export default function Forgetpass() {
  const [email, setEmail] = useState('');
  const router = useRouter();

  function toLogin() {
    localStorage.clear();
    router.push('/login');
  }

  //post request to an Express server which is running nodemailer
  function handleSubmit() {
    axiosNodemailer(email);
    alert("Email sent");
    setTimeout(function(){
      toLogin()
    }, 1000);
    console.log(email);
  }

  return (
    <AppContext.Provider value={email}>
      <div className={styles.newStudentShadow}>
        <div className={styles.forgotCard}>
          <div style={{ fontSize: '1.5rem' }}>Please enter your email</div>

          <input
            id="email"
            className={styles.newInput}
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
          ></input>

          <div className={styles.spacedButtons}>
            <div
              className={styles.launchButton}
              onClick={() => toLogin()}
            >
              Cancel
            </div>
            {email ? (
              <div
                className={styles.launchButton}
                onClick={handleSubmit}
                id="create"
              >
                Submit
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
