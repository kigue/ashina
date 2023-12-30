import React, { Component } from 'react';
import { Navbar, Nav, Container, Button, Image, NavDropdown, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsCart } from 'react-icons/bs';
import logo from './logo.png';
import './MainNavbar.css';

class CustomNavbar extends Component {
  render() {
    return (
      <Navbar expand="lg" style={{ height: '75px', backgroundColor: 'darkgreen' }}>
        <Container fluid>
          <Navbar.Brand href="/governance">
            <Image src={logo} width="30" height="30" className="d-inline-block align-top" />
            <span className="ml-2 navbar-brand-custom">Ashina Governance</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <NavDropdown title="Discover" id="basic-nav-dropdown" className="nav-dropdown-custom">
                <NavDropdown.Item as={Link} to="/">Home</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/farm">Farms</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/marketplace">Marketplace</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/resources">Resources</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/jobs">Jobs</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/hub">Settings</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <div className="search-bar-custom">
              <input type="text" placeholder="Search for Info on Policies, Committies, Proposals, and More...." className="search-input-custom"/>
            </div>
            <Button variant="outline-dark" className="connect-button-custom">Connect</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default CustomNavbar;
