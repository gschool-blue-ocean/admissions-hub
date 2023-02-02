import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from '../../styles/Dashboard.module.css';
import Email from 

export default function DashBottom(props) {
  // LMAO numbies
  const [numbies, setNumbies] = useState([0, 0, 0]);

  function calcNumbies() {
    let countQTR = 0;
    let countYR = 0;
    let countALL = 0;
    props.interviews.forEach((item) => {
      if (item.interviewer_id == localStorage.getItem('id')) {
        if (Date.now() - new Date(item.date) < 7889400000) {
          countQTR++;
        }
        if (Date.now() - new Date(item.date) < 31557600000) {
          countYR++;
        }
        countALL++;
      }
    });
    setNumbies([countQTR, countYR, countALL]);
  }

  useEffect(() => {
    calcNumbies();
  }, [props.interviews]);

  return (
    <div className={styles.dashBottom}>
      <span
        className={styles.bottomTitle}
        id="message"
      >
        Your Interview Stats
        {/* {localStorage.getItem('firstName')} {localStorage.getItem('lastName')}'s Interview Stats */}
      </span>
      <div className={styles.bottomStatsRow}>
        <div className={styles.bottomStatsGroup}>
          <div className={styles.bottomNumby}>{numbies[0]}</div>
          <span className={styles.bottomLabel}>Last 3 Months</span>
        </div>
        <div className={styles.bottomStatsDivider}></div>
        <div className={styles.bottomStatsGroup}>
          <div className={styles.bottomNumby}>{numbies[1]}</div>
          <span className={styles.bottomLabel}>Last Year</span>
        </div>
        <div className={styles.bottomStatsDivider}></div>
        <div className={styles.bottomStatsGroup}>
          <div className={styles.bottomNumby}>{numbies[2]}</div>
          <span className={styles.bottomLabel}>Lifetime</span>
        </div>
      </div>
    </div>
  );
}
