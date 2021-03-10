import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import { useAuth } from '../util/auth';

function NavbarCustom(props) {
  const auth = useAuth()
  return (
    <Navbar bg={props.bg} variant={props.variant} expand={props.expand}>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              className="d-inline-block align-top"
              src={props.logo}
              alt="Logo"
              height="30"
            />
            <span>MW</span>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav className="mr-1">
            <LinkContainer to="/">
              <Nav.Link active={false}>{props.link_1}</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link active={false}>{props.link_2}</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/blog">
              <Nav.Link active={false}>{props.link_3}</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/add-projects">
              <Nav.Link active={false}>{props.link_4}</Nav.Link>
            </LinkContainer>
            {auth.user &&
              <LinkContainer to="/auth/signout"onClick={(e) => {
                  e.preventDefault();
                  auth.signout();
                }}
              >
                <Nav.Link active={false}>Logout</Nav.Link>
              </LinkContainer>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom;
