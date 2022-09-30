import { useRouter } from "next/router";
import { Form, Button, Card } from "react-bootstrap";
import styles from "./LoginPageStyle.module.css";


export default function AdminLogin() {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/dashboard");
  };
  return (
    <>
      <p>
        *Invalid username or password!
      </p>
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
                    placeholder="Username"
                    style={{
                      backgroundColor: "#D9D9D9",
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    style={{
                      backgroundColor: "#D9D9D9",
                    }}
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
