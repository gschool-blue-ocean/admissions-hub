import { useEffect } from 'react';
import Header from '../../src/components/Header';
import Footer from '../../src/components/Footer';
import InterviewDash from '../../src/components/InterviewDash';
import auth from '../../lib/auth';

export default function index() {
  //if local storage does not have accessToken, redirect to login page

  useEffect(() => {
    auth('/dashboard');
  }, []);

  return (
    <div style={{ backgroundColor: '#0d0f4ae3' }}>
      <Header />
      <InterviewDash />
      <Footer />
    </div>
  );
}
