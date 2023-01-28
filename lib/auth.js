import axios from 'axios';

export default function auth(cbPass, cbFail) {
  axios
    .post('/api/auth', { name: localStorage.getItem('firstName'), token: localStorage.getItem('token') })
    .then((result) => result.data)
    .then((data) => {
      if (data.valid) {
        console.log('token valid');
        cbPass();
      } else {
        console.log('token invalid');
        localStorage.clear();
        cbFail();
      }
    })
    .catch((err) => {
      console.log('server issue while checking token');
      console.log(err);
      cbFail();
    });
}
