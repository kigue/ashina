import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row'; // Add this import
import Col from 'react-bootstrap/Col'; // Add this import
import SubNav from './SubNav';
import ProfileNav from './ProfileNav';
import { NavDropdown } from 'react-bootstrap'; 
import { Link } from 'react-router-dom';
import logo from './logo.png'


class JobNav extends Component {
  render() {
    return (
      <Navbar style={{ height: '75px' }}>
      <Container fluid>
          <Image src={logo} width="25" height="25" className="d-inline-block align-bottom mb-1 mr-2" style={{marginTop: '5px' }} />

        <Nav style={{marginLeft: '-160px', fontWeight: 'bolder', fontSize: '22px'}}>
          <NavDropdown title="Ashina Jobs" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to="/">
              Ashina DAO
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/marketplace">
              Ashina Marketplace
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/proposals">
              Ashina Proposals
            </NavDropdown.Item>
            {/* Add more dropdown items as needed */}
          </NavDropdown>
        </Nav>

        <div><SubNav/></div>
    
        <div>
          <ProfileNav/>
        </div>
      </Container>
    </Navbar>
    );
  }
}

export default JobNav;
