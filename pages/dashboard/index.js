import { useEffect, useState } from 'react';
import Header from '../../src/components/Shared-Comps/Header';
import Footer from '../../src/components/Shared-Comps/Footer';
import InterviewDash from '../../src/components/InterviewDash';
import Loading from '../../src/components/Shared-Comps/loading/Loading';
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
      <InterviewDash />
      <Footer />
    </div>
  ) : (
    <Loading />
  );
}
