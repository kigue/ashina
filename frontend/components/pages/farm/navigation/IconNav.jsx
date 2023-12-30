import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './icon.css'
// Import React Icons
import { FaHome, FaListAlt, FaCog, FaWallet, FaVoteYea, FaUserFriends, FaBoxOpen } from 'react-icons/fa';

class IconNav extends Component {
  constructor(props) {
    super(props);

    // Define an array of food items, each containing an icon and crop name
    this.state = {
      iconItems: [
        { id: 1, icon: <FaHome />, iconItem: 'Home' },
        { id: 2, icon: <FaListAlt />, iconItem: 'Listings' },
        { id: 3, icon: <FaVoteYea />, iconItem: 'Orders' },
        { id: 4, icon: <FaBoxOpen />, iconItem: 'Inventory' },
        { id: 6, icon: <FaUserFriends />, iconItem: 'Team' },
        { id: 7, icon: <FaCog />, iconItem: 'Settings' },

      ],
    };
  }

  render() {
    return (
      <Container style={{ backgroundColor: 'beige' }}>
        <Row>
          {this.state.iconItems.map((item) => (
            <Col key={item.id} className='App text-center a:hover::before'>
              <Link to={`/farm/${item.iconItem.toLowerCase()}`}>
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
