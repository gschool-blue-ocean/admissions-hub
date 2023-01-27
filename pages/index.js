import { useEffect } from 'react';
import styles from './index.module.css';
import auth from '../lib/auth';

export default function Home() {
  useEffect(() => {
    setTimeout(() => auth('/dashboard'), 1000);
  }, []);
  return (
    <div className={styles.wrapper}>
      <div className={styles.loading}></div>
    </div>
  );
}
