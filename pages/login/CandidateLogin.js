import { Form, Button, Card } from "react-bootstrap";

export default function CandidateLogin() {
  return (
    <div>
      <Card style={{ width: "100%" }}>
        <Card.Img
          className="w-50 h-50 "
          variant="top"
          src="https://cdn-icons-png.flaticon.com/512/1754/1754655.png"
        />
        <Card.Body>
          <Card.Title className="text-center">Candidate</Card.Title>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
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
