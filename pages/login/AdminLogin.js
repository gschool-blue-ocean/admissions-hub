import { useRouter } from 'next/router';
import { useState } from 'react';
import { useAppContext } from '../../src/components/GlobalContext';
import axios from 'axios';
import { Form, Button, Card } from 'react-bootstrap';
import styles from './LoginPageStyle.module.css';
<<<<<<< HEAD
import { left } from '@popperjs/core';
=======
>>>>>>> main

export default function AdminLogin() {
  const router = useRouter();
  const [buttonText, setButtonText] = useState('click');

  const { setShowWarning, setUser } = useAppContext();

  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const { email, password } = loginForm;
  const onChangeLoginForm = (event) =>
    setLoginForm(
      //se computed property to update properties in state loginForm
      { ...loginForm, [event.target.name]: event.target.value }
      //console log to see if it works
    );
  const loginAdmin = async (loginForm) => {
    try {
      const response = await axios.post('/api/admin', loginForm);
      if (response.data.connect) {
        setUser(response.data);
        return response.data;
      } else {
        return 'Wrong username or password';
      }
    } catch (error) {
      throw error;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      //get data from loginUser, login form is user's input
      const loginData = await loginAdmin(loginForm);
      // console.log("login data ", loginData.accessToken);
      //save accessToken to local storage
      localStorage.setItem('accessToken', loginData.accessToken);
<<<<<<< HEAD
=======
      localStorage.setItem('firstName', loginData.first_name);
      localStorage.setItem('lastName', loginData.last_name);
>>>>>>> main
      //if login is successful, redirect to home page dashboard
      if (loginData.connect) {
        router.push('/dashboard');
        //add accessToken to url
        router.push(`/dashboard?access=${loginData.accessToken}`);
      } else {
        setShowWarning(true);
        setTimeout(() => {
          setShowWarning(false);
        }, 3000);
      }
    } catch (error) {
      throw error;
    }
  };

  function getJarrett() {
    axios
      .get('/api/jarrett')
      .then((result) => result.data)
      .then((data) => setButtonText(data.email))
      .catch((err) => console.log(err));
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
          margin: 0,
        }}
      >
        <div className="row no-gutters">
          <div className="col-7">
            <Card.Body className={`${styles.loginCardBody} text-center`}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control
                    type="text"
                    placeholder="Email"
                    name="email"
                    style={{
                      backgroundColor: '#D9D9D9',
                    }}
                    value={email}
                    onChange={onChangeLoginForm}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="password"
                    style={{
                      backgroundColor: '#D9D9D9',
                    }}
                    value={password}
                    onChange={onChangeLoginForm}
                  />
                </Form.Group>
                <div
                  style={{
                    // display: 'flex',
                 
                    // width: 'auto', 
                  }}>
                <Button
                  variant="primary"
                  type="submit"
                  style={{
                    backgroundColor: '#EF6E47',
                    // alignItems: 'flex-start',
                    height: 50,
                    width: 116,
                    padding: 10,
                  }}
                >
                  forgot password
                </Button>
                <Button
                  variant="primary"
                  type="submit"
                  style={{
                    backgroundColor: '#EF6E47',
<<<<<<< HEAD
                    // display: 'flex',
                    // float: 'left',
                    // justifyContent: 'flex-end',
                    height: 50,
=======
>>>>>>> main
                    width: 116,
                    padding: 10,
                  }}
                >
                  login
                </Button>
                </div>

              </Form>
            </Card.Body>
          </div>

          <div className="col ">
            <img
              src="https://cdn.discordapp.com/attachments/1011712154480680960/1025120519961444472/unknown.png"
              className="img-fluid"
              alt
            />
          </div>
        </div>
      </Card>
    </>
  );
}
