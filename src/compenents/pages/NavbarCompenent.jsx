import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

function NavbarCompenent() {
  return (
    <div>
      <Navbar>
        <Container fluid>
          <Navbar.Brand href="home">Galsen Api</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              href="https://github.com/bakeli-OpenSource/galsen-api-site"
              target="_blank"
            >
              Voir sur GitLab
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarCompenent;
