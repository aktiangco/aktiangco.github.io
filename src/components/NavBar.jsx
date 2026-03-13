import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
  const linkStyle = {
    textDecoration: 'none'
  };

  const dropdownStyle = {
    color: 'white',
    backgroundColor: 'black',
    padding: '5px'
  };

  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container style={{ justifyContent: 'evenly', padding: '0px', margin: '5px' }}>
        <Navbar.Brand>
          <h1 className="title">MedTek Hayward</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-item active" style={linkStyle} to="/">
              <button className="nav-link rounded">Home</button>
            </Link>

            <NavDropdown
              bg="dark"
              variant="dark"
              title="Sterilizers"
              id="basic-nav"
              className="nav-item active"
            >
              <NavDropdown.Item className="nav-item active" style={dropdownStyle}>
                <Link className="nav-item" style={linkStyle} to="/Gallery">
                  <button className="nav-link rounded">Sterilization</button>
                </Link>
                <Link className="nav-item" style={linkStyle} to="/Steam">
                  <button className="nav-link rounded">Steam</button>
                </Link>
                <Link className="nav-item" style={linkStyle} to="/Eo">
                  <button className="nav-link rounded">Ethylene Oxide (EO)</button>
                </Link>
                <Link className="nav-item" style={linkStyle} to="/Ltgp">
                  <button className="nav-link rounded">Low-Temp Gas Plasma(LTGP)</button>
                </Link>
                <Link className="nav-item" style={linkStyle} to="/Vpro">
                  <button className="nav-link rounded">Low-Temp Hydrogen Peroxide (V-PRO)</button>
                </Link>
                <Link className="nav-item" style={linkStyle} to="/Ozone">
                  <button className="nav-link rounded">Hydrogen Peroxide Ozone</button>
                </Link>
                <Link className="nav-item" style={linkStyle} to="/Iuss">
                  <button className="nav-link rounded">IUSS</button>
                </Link>
                <Link className="nav-item" style={linkStyle} to="/Dryheat">
                  <button className="nav-link rounded">DRY HEAT</button>
                </Link> 
              </NavDropdown.Item>
            </NavDropdown>

            <Link className="nav-item" style={linkStyle} to="/about">
              <button className="nav-link rounded">About Me</button>
            </Link>

            <Link className="nav-item" style={linkStyle} to="/contact">
              <button className="nav-link rounded">Contact</button>
            </Link>


          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;