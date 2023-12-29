import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { FaHome, FaArchive, FaStore, FaVoteYea,FaCog, FaStoreAlt, FaMoneyBill, FaLaptop} from 'react-icons/fa';
import { FaBoxOpen } from "react-icons/fa6";
import './IconNav.css'


class IconNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodItems: [
        { id: 1, icon: <FaHome />, cropName: 'Home', route: '/' },
        { id: 2, icon: <FaStoreAlt />, cropName: 'Farms', route: '/farm' },
        { id: 3, icon: <FaStore />, cropName: 'Marketplace', route: '/marketplace' },
        { id: 5, icon: <FaVoteYea />, cropName: 'Governance', route: '/governance' },
        { id: 6, icon: <FaLaptop />, cropName: 'Resources', route: '/resources' }, // A place to save and revisit personal favorite items or farms
        //{ id: 6, icon: <FaBriefcase />, cropName: 'Jobs', route: '/jobs' },
        { id: 7, icon: <FaCog />, cropName: 'Settings', route: '/hub' }
      ],
    };
  }

  render() {
    return (
      <Container style={{backgroundColor: 'beige'}}>
        <Row className='mt-1'>
          {this.state.foodItems.map((item) => (
            <Col key={item.id} className='App text-center a:hover::before'>
            <Link style={{color: 'black'}} to={item.route}>
                {item.icon}
                <p>{item.cropName}</p>
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default IconNav;
