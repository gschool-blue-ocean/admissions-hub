import { useRouter } from "next/router";
import { Form, Button, Card } from "react-bootstrap";
// import business from "../img/business.png";?


export default function AdminLogin() {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/dashboard");
  };
  return (
    <div>
      <Card style={{ width: "25%" }}>
        <Card.Img
          className=""
          variant="top"
          src="https://cdn-icons-png.flaticon.com/512/2503/2503732.png"
        />
        <Card.Body>
          <Card.Title className="text-center">Admin</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="email" placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
