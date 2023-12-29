import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './icon.css'
import { GiFarmTractor } from "react-icons/gi";


// Import React Icons
import { FaHome, FaCarrot, FaVideo, FaBloggerB, FaListAlt, FaHotel} from 'react-icons/fa';

class IconNav extends Component {
  constructor(props) {
    super(props);

    // Define an array of food items, each containing an icon and crop name
    this.state = {
      iconItems: [
        { id: 1, icon: <FaBloggerB />, iconItem: 'Blogs' }, // A marketplace for buying, selling, or exchanging seeds
        { id: 2, icon: <FaVideo/>, iconItem: 'Videos' }, // Main overview page for the marketplace
        { id: 3, icon: <FaListAlt />, iconItem: 'Forum' }, // Direct access to individual farmers' virtual shops
        { id: 4, icon: <FaHotel />, iconItem: 'NGOs' }, // Information on joint farming initiatives and how to participate
      ],
    };
  }

  render() {
    return (
      <Container style={{ backgroundColor: 'beige' }}>
        <Row>
          {this.state.iconItems.map((item) => (
            <Col key={item.id} className='App text-center a:hover::before'>
              <Link to={`/resources/${item.iconItem.toLowerCase()}`}>
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
