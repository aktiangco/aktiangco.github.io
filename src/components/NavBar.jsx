import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setExpanded(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setExpanded(false);

  return (
    <Navbar expand="lg" bg="dark" variant="dark" fixed="top" expanded={expanded}
    onToggle={(isOpen) => setExpanded(isOpen)}
    collapseOnSelect>
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={closeMenu}>
          MedTek Hayward
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" onClick={closeMenu}>
              Home
            </Nav.Link>

            <NavDropdown title="Sterilizer Project" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/gallery" onClick={closeMenu}>
                About Sterilization
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/steam" onClick={closeMenu}>
                Steam
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/eo" onClick={closeMenu}>
                Ethylene Oxide (EO)
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/ltgp" onClick={closeMenu}>
                Low-Temp Gas Plasma (LTGP)
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/vpro" onClick={closeMenu}>
                Low-Temp Hydrogen Peroxide (V-PRO)
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/ozone" onClick={closeMenu}>
                Hydrogen Peroxide Ozone
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/iuss" onClick={closeMenu}>
                IUSS
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/dryheat" onClick={closeMenu}>
                Dry Heat
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/podcast" onClick={closeMenu}>
              Podcast Report
            </Nav.Link>

            <Nav.Link as={Link} to="/group" onClick={closeMenu}>
              Group Project
            </Nav.Link>

            <Nav.Link as={Link} to="/about" onClick={closeMenu}>
              About Me
            </Nav.Link>

            <Nav.Link as={Link} to="/contact" onClick={closeMenu}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;