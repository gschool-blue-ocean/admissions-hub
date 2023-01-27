import Router from 'next/router';
import axios from 'axios';

export default function auth(path) {
  axios
    .post('/api/auth', { name: localStorage.getItem('firstName'), token: localStorage.getItem('token') })
    .then((result) => result.data)
    .then((data) => {
      if (data.valid) {
        Router.push(path);
      } else {
        localStorage.clear();
        Router.push('/login');
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
