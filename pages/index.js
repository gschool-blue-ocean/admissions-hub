import Loading from '../src/Shared/loading/Loading';
import auth from '../lib/auth';
import Router from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      auth(
        () => Router.push('/dashboard'),
        () => Router.push('/login')
      );
    }, 1000);
  }, []);
  return <Loading />;
}
