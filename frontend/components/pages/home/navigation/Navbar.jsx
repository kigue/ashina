import React, { Component } from 'react';
import { Navbar, Nav, Container, Image, Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './MainNavbar.css';
import { ConnectButton } from "@connect2ic/react";
import IconNav from './IconNav'; // Adjust the path as per your project structure

class MainNavbar extends Component {
  render() {
    return (
      <>
        <Navbar expand="lg" className="custom-navbar" style={{backgroundColor: 'darkgreen'}}>
          <Container fluid>
            <Navbar.Brand href="/" className="d-flex align-items-center">
              <Image src={logo} width="30" height="30" className="d-inline-block align-top" />
              <span style={{fontSize: '25px'}}className="ml-2 navbar-brand-custom">Ashina</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Link to="/docs" className="nav-link" style={{ color: 'black', fontWeight: 'bold' }}>Docs</Link>
                <Link to="/teams" className="nav-link" style={{ color: 'black', fontWeight: 'bold' }}>Team</Link>
                <Link to="/jobs" className="nav-link" style={{ color: 'black', fontWeight: 'bold' }}>Jobs</Link>
              </Nav>
              <div className="search-bar-custom">
                <input type="text" placeholder="Search for Farms, Marketplace Items, Processing, and More..." className="search-input-custom" />
              </div>
              <Button variant="outline-dark" className="connect-button-custom">Connect</Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container fluid>
          <Row>
            <IconNav />
          </Row>
        </Container>
      </>
    );
  }
}

export default MainNavbar;
