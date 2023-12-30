import React, { Component } from 'react';
import { Navbar, Nav, Container, Button, Image, NavDropdown, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsCart } from 'react-icons/bs';
import logo from './logo.png';
import './MainNavbar.css';

class CustomNavbar extends Component {
  render() {
    return (
      <Navbar expand="lg" style={{ backgroundColor: 'darkgreen' }}>
        <Container fluid>
          <Navbar.Brand href="/">
            <Image src={logo} width="30" height="30" className="d-inline-block align-top" />
            <span className="ml-2 navbar-brand-custom">Ashina Resources</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Discover" id="basic-nav-dropdown" className="nav-dropdown-custom">
                <NavDropdown.Item as={Link} to="/marketplace">Marketplace</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/governance">Governance</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/jobs">Jobs</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <div className="search-bar-custom">
              <input type="text" placeholder="Search for Resources, Articles, Discussions..." className="search-input-custom"/>
            </div>
            <Button variant="outline-dark" className="connect-button-custom">Connect</Button>
            <Link to="/cart" className="cart-icon-custom">
              <BsCart size={25} />
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default CustomNavbar;
