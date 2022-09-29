import styles from "./LoginPageStyle.module.css";
import AdminLogin from "./AdminLogin";
import CandidateLogin from "./CandidateLogin";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Login() {
  return (
    <Container>
      <Row>
        <Col>
          <AdminLogin />
        </Col>
      </Row>
    </Container>
  );
}
