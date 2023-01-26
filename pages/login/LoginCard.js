import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card } from 'react-bootstrap';
import styles from './Login.module.css';

export default function AdminLogin(props) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [correct, setCorrect] = useState(true);

  //if local storage has accessToken, redirect to dashboard
  // useEffect(() => {
  //   if (localStorage.getItem('accessToken')) {
  //     setUser(localStorage.getItem('userId'));
  //   }
  // }, []);

  function login() {
    setCorrect(true);
    axios
      .post('/api/admin', { email: email, password: password })
      .then((result) => result.data)
      .then((data) => {
        setCorrect(true);
        if (data.valid) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('id', data.id);
          localStorage.setItem('firstName', data.first_name);
          localStorage.setItem('lastName', data.last_name);
          localStorage.setItem('lastName', data.last_name);
          router.push('/dashboard');
        } else {
          setCorrect(false);
        }
      })
      .catch((err) => console.log(err));
  }

  function handleEnter(e) {
    if (e.keyCode == 13) {
      handleSubmit();
    }
  }

  function handleSubmit() {
    login();
  }

  return (
    <>
      <Card
        style={{
          width: '35%',
          backgroundColor: '#f0f0f0',
          width: 600,
          height: 230,
          paddingTop: 25,
          margin: 0
        }}
      >
        <div className="row no-gutters">
          <div className="col-7">
            <Card.Body className={`${styles.loginCardBody} text-center`}>
              <div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    style={{
                      backgroundColor: '#D9D9D9'
                    }}
                    value={email}
                    onChange={onChangeLoginForm}
                    onKeyDown={handleEnter}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    style={{
                      backgroundColor: '#D9D9D9'
                    }}
                    value={password}
                    onChange={onChangeLoginForm}
                    onKeyDown={handleEnter}
                  />
                </div>
                <div
                  style={{
                    height: 50,
                    width: 'auto',
                    display: 'block'
                  }}
                >
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={handleSubmit}
                    style={{
                      backgroundColor: '#EF6E47',
                      fontWeight: 'bold',
                      fontSize: 14,
                      float: 'left',
                      height: 40,
                      width: 100,
                      paddingLeft: 10,
                      paddingRight: 10,
                      paddingTop: 0,
                      paddingBottom: 0
                    }}
                  >
                    login
                  </Button>
                  <Button
                    variant="primary"
                    type="forgot"
                    style={{
                      backgroundColor: '#EF6E47',
                      fontWeight: 'bold',
                      fontSize: 12,
                      float: 'right',
                      height: 40,
                      width: 100,
                      paddingLeft: 10,
                      paddingRight: 10,
                      paddingTop: 0,
                      paddingBottom: 0
                    }}
                  >
                    forgot password
                  </Button>
                </div>
              </div>
            </Card.Body>
          </div>

          <div className="col ">
            <img
              src="https://cdn.discordapp.com/attachments/1011712154480680960/1025120519961444472/unknown.png"
              className="img-fluid"
            />
          </div>
        </div>
      </Card>
    </>
  );
}
