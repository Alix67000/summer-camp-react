import React from "react";
import { Nav, Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <Navbar bg="color" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>Camp été Emmaüs</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="m-auto">
              <Nav.Link as={Link} to="/">
                Accueil
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/informations">
                Info-pratiques
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                Qui sommes-nous
              </Nav.Link>
              <Nav.Link as={Link} to="/register">
                Inscription
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;

/* <Link to="/">Accueil</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/register">Inscription</Link>
      <Link to="/informations">Infos-pratiques</Link>
      <Link to="/about">Qui semmes-nous</Link> */
