import Image from "next/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LoginDate from "./LoginDate";

export default function LoginNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Image
            src="/galvanize-full-logo.png"
            width="156"
            height="60"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>

        <Nav href="#home">Interview Login</Nav>

        <Nav href="#link">
          <LoginDate />
        </Nav>
      </Container>
    </Navbar>
  );
}
