import { useRouter } from "next/router";
import { useState } from "react";
import { useAppContext } from "../../src/components/GlobalContext";
import axios from "axios";
import { Form, Button, Card } from "react-bootstrap";
import styles from "./LoginPageStyle.module.css";

export default function AdminLogin() {
  const router = useRouter();

  const { setShowWarning, setUser } = useAppContext();

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
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
      const response = await axios.post("/api/admin", loginForm);

      if (response.data.connect) {
        setUser(response.data);
        return response.data;
      } else {
        return "Wrong username or password";
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
      localStorage.setItem("accessToken", loginData.accessToken);
      
      //if login is successful, redirect to home page dashboard
      if (loginData.connect) {
        router.push("/dashboard");
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

                <Button
                  variant="primary"
                  type="submit"
                  style={{
                    backgroundColor: "#DD8D43",
                    width: 116,
                  }}
                >
                  login
                </Button>
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
