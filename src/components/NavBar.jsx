import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import medtek from "../assets/images/medtek.png";
import { Asterisk } from "react-bootstrap-icons";
import VisitCounter from "./VisitCounter";
import home from "../assets/images/icons/home.png";
import machine from "../assets/images/icons/sterilizer.png";
import podcast from "../assets/images/icons/podcaster.png";
import group from "../assets/images/icons/group.png";
import instrument from "../assets/images/icons/instrument.png";
import photo from "../assets/images/icons/gallery.png";
import user from "../assets/images/icons/user.png";
import contact from "../assets/images/icons/contact.png";

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
    <Navbar
      expand="lg"
      bg="dark"
      variant="dark"
      fixed="top"
      expanded={expanded}
      onToggle={(isOpen) => setExpanded(isOpen)}
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={closeMenu}>
          <div className="logo-header">
            <img src={medtek} alt="logo" className="logo-img" />
            <h2 className="logo-text">MEDTEK Hayward</h2>
          </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" onClick={closeMenu} className="nav-icon">
              <img src={home} alt="Home" className="nav-img" />
              <span className="nav-label">Home</span>
            </Nav.Link>

            <NavDropdown
              className="nav-dropdown-icon"
              title={
                <div className="nav-icon">
                  <img
                    src={machine}
                    alt="Sterilizer Project"
                    className="nav-img"
                  />
                  <span className="nav-label">Sterilizer Project</span>
                </div>
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item as={Link} to="/gallery" onClick={closeMenu}>
                About Sterilizer
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/steam" onClick={closeMenu}>
                <Asterisk size={10} /> Steam
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/eo" onClick={closeMenu}>
                <Asterisk size={10} /> Ethylene Oxide (EO)
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/ltgp" onClick={closeMenu}>
                <Asterisk size={10} /> Low-Temp Gas Plasma (LTGP)
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/vpro" onClick={closeMenu}>
                <Asterisk size={10} /> Low-Temp Hydrogen Peroxide (V-PRO)
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/ozone" onClick={closeMenu}>
                <Asterisk size={10} /> Hydrogen Peroxide Ozone
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/iuss" onClick={closeMenu}>
                <Asterisk size={10} /> IUSS
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/dryheat" onClick={closeMenu}>
                <Asterisk size={10} /> Dry Heat
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link
              as={Link}
              to="/podcast"
              onClick={closeMenu}
              className="nav-icon"
            >
              <img src={podcast} alt="Podcast Report" className="nav-img" />
              <span className="nav-label">Podcast Report</span>
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/group"
              onClick={closeMenu}
              className="nav-icon"
            >
              <img src={group} alt="Group Project" className="nav-img" />
              <span className="nav-label">Group Project</span>
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/instrumentTable"
              onClick={closeMenu}
              className="nav-icon"
            >
              <img
                src={instrument}
                alt="Instrument Project"
                className="nav-img"
              />
              <span className="nav-label">Instrument Project</span>
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/photo"
              onClick={closeMenu}
              className="nav-icon"
            >
              <img src={photo} alt="Photo Gallery" className="nav-img" />
              <span className="nav-label">Photo Gallery</span>
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/about"
              onClick={closeMenu}
              className="nav-icon"
            >
              <img src={user} alt="About me" className="nav-img" />
              <span className="nav-label">About me</span>
            </Nav.Link>

            <Nav.Link
              as={Link}
              to="/contact"
              onClick={closeMenu}
              className="nav-icon"
            >
              <img src={contact} alt="Contact me" className="nav-img" />
              <span className="nav-label">Contact me</span>
            </Nav.Link>
          </Nav>

          <div className="ms-auto d-flex align-items-center">
            <VisitCounter />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
