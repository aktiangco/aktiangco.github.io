import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  return (


    <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          MedTek Hayward
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <NavDropdown title="Sterilizer Project" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/gallery">
                About Sterilization
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/steam">
                Steam
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/eo">
                Ethylene Oxide (EO)
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/ltgp">
                Low-Temp Gas Plasma (LTGP)
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/vpro">
                Low-Temp Hydrogen Peroxide (V-PRO)
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/ozone">
                Hydrogen Peroxide Ozone
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/iuss">
                IUSS
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/dryheat">
                Dry Heat
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/podcast">
              Podcast Report
            </Nav.Link>

            <Nav.Link as={Link} to="/group">
              Group Project
            </Nav.Link>

            <Nav.Link as={Link} to="/about">
              About Me
            </Nav.Link>

            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;