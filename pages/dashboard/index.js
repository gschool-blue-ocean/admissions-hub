import { useEffect, useState } from 'react';
import Header from '../../src/Shared/Header';
import Footer from '../../src/Shared/Footer';
import DashboardContent from '../../src/Dashboard/DashboardContent';
import Loading from '../../src/Shared/loading/Loading';
import auth from '../../lib/auth';
import Router from 'next/router';

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
    <div style={{ backgroundColor: '#0d0f4ae3' }}>
      <Header />
      <DashboardContent />
      <Footer />
    </div>
  ) : (
    <Loading />
  );
}
