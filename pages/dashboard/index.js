import { useEffect, useState } from 'react';
import Header from '../../src/Shared/Header';
import Footer from '../../src/Shared/Footer';
import DashContent from '../../src/Dashboard/DashContent';
import Loading from '../../src/Shared/loading/Loading';
import auth from '../../lib/auth';
import Router from 'next/router';
import styles from '../../styles/Dashboard.module.css';

export default function index() {
  const [valid, setValid] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      auth(
        () => setValid(true),
        () => Router.push('/login')
      );
    }, 1000);
  }, []);

  return valid ? (
    <div className={styles.dashboardPage}>
      <Header />
      <DashContent />
      <Footer />
    </div>
  ) : (
    <Loading />
  );
}
