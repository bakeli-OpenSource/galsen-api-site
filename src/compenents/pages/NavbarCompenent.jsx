import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

function NavbarCompenent() {
  return (
    <div>
      <Navbar>
        <Container fluid>
          <Navbar.Brand href="#home">Galsen API</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">View on GitLab</Nav.Link>
            <Nav.Link href="#features">Issues</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarCompenent;
