import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaUser, FaBriefcase, FaBookmark } from 'react-icons/fa'; // Import the icons you want to use
import './icon.css'

class IconNav extends Component {
  constructor(props) {
    super(props);

    // Define an array of food items, each containing an icon and crop name
    this.state = {
        foodItems: [
          { id: 1, icon: <FaEnvelope />, iconItem: 'Postings' },
          { id: 2, icon: <FaUser />, iconItem: 'Applications' },
          { id: 3, icon: <FaBookmark />, iconItem: 'Saved' },
          { id: 4, icon: <FaBriefcase />, iconItem: 'Support' },
        
        // Add more items as needed
      ],
    };
  }

  render() {
    return (
      <Container style={{ backgroundColor: 'beige' }}>
      <Row>
        {this.state.foodItems.map((item) => (
          <Col key={item.id} className='App text-center jobs a:hover::before'>
            <Link to={`/jobs/${item.iconItem.toLowerCase()}`}>
              {item.icon}
              <p>{item.iconItem}</p>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
    );
  }
}

export default IconNav;
