import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useAppContext } from "../../src/components/GlobalContext";
import axios from "axios";
import { Form, Button, Card } from "react-bootstrap";
import styles from "./LoginPageStyle.module.css";
import { auto } from "@popperjs/core";


export default function AdminLogin() {
  const router = useRouter();
  const { setShowWarning, setUser } = useAppContext();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const { email, password } = loginForm;

  //if local storage has accessToken, redirect to dashboard
  useEffect(() => {
    if (sessionStorage.getItem("accessToken")) {
      setUser(sessionStorage.getItem("userId"));
    }
  }, []);

  const onChangeLoginForm = (event) =>
    setLoginForm(
      //update properties in state loginForm
      { ...loginForm, [event.target.name]: event.target.value }
    );

  
  const loginAdmin = async (loginForm) => {
    try {
      const response = await axios.post('/api/admin', loginForm);
      if (response.data.connect) {
        setUser(response.data);
        //save accessToken to local storage
        sessionStorage.setItem('accessToken', response.data.accessToken);
         //if login is successful, redirect to home page dashboard
         //router.push('/dashboard')
        setTimeout(() => {
          console.log("connection test")
          const accessToken = sessionStorage.getItem("accessToken");
          console.log(accessToken)
          router.push('/dashboard')
        }, 200)
        return response.data;
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
      //console.log("login data ", loginData.accessToken);
      //save accessToken to local storage
      sessionStorage.setItem("accessToken", loginData.accessToken);
      sessionStorage.setItem("firstName", loginData.first_name);
      sessionStorage.setItem("lastName", loginData.last_name);
      //if login is successful, redirect to home page dashboard
      if (!loginData.connect) {
        setShowWarning(true);
        setTimeout(() => {
          setShowWarning(false);
        }, 3000);
      }
    } catch (error) {
      throw error;
    }
  };

  return (
    <>
      <Card
        style={{
          width: "35%",
          backgroundColor: "#f0f0f0",
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
                      backgroundColor: "#D9D9D9",
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
                      backgroundColor: "#D9D9D9",
                    }}
                    value={password}
                    onChange={onChangeLoginForm}
                  />
                </Form.Group>
                <div
                  style={{
                    height: 50,
                    width: "auto",
                    display: "block",
                  }}
                >
                  <Button
                    variant="primary"
                    type="submit"
                    style={{
                      backgroundColor: "#EF6E47",
                      float: "left",
                      height: 50,
                      width: 115,
                    }}
                  >
                    login
                  </Button>
                  <Button
                    variant="primary"
                    type="submit"
                    style={{
                      backgroundColor: "#EF6E47",
                      float: "right",
                      height: 50,
                      width: 115,
                    }}
                  >
                    forgot password
                  </Button>
                </div>
              </Form>
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
