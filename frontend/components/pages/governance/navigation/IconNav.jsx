import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './icon.css'
// Import React Icons
import { FaHome, FaFileAlt, FaUsers, FaVoteYea, FaRecycle } from 'react-icons/fa';

class IconNav extends Component {
  constructor(props) {
    super(props);

    // Define an array of food items, each containing an icon and crop name
    this.state = {
      iconItems: [
        { id: 1, icon: <FaHome />, iconItem: 'Home' },
        { id: 2, icon: <FaUsers />, iconItem: 'Committies' },
        { id: 3, icon: <FaVoteYea />, iconItem: 'Proposals' },
        { id: 4, icon: <FaFileAlt />, iconItem: 'Regulations' },
        { id: 5, icon: <FaRecycle />, iconItem: 'Sustainability' },
      ],
    };
  }

  render() {
    return (
      <Container style={{ backgroundColor: 'beige' }}>
        <Row>
          {this.state.iconItems.map((item) => (
            <Col key={item.id} className='App text-center a:hover::before'>
              <Link to={`/governance/${item.iconItem.toLowerCase()}`}>
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
