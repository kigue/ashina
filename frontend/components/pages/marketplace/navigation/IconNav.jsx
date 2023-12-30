import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './icon.css'
import { GiFarmTractor } from "react-icons/gi";


// Import React Icons
import { FaHome, FaLeaf, FaCarrot, FaStoreAlt, FaLandmark, FaHeart, FaHeadset, FaBook,FaSeedling,FaChartLine,FaTools,FaUsers, FaHandshake, FaResearchgate, FaArchive} from 'react-icons/fa';

class IconNav extends Component {
  constructor(props) {
    super(props);

    // Define an array of food items, each containing an icon and crop name
    this.state = {
      iconItems: [
        { id: 1, icon: <FaSeedling />, iconItem: 'Inputs' }, // A marketplace for buying, selling, or exchanging seeds
        { id: 2, icon: <GiFarmTractor size={25} />, iconItem: 'Farms' }, // Main overview page for the marketplace
        // { id: 2, icon: <FaCarrot />, iconItem: 'Produce' }, // Direct access to individual farmers' virtual shops
        { id: 3, icon: <FaLeaf />, iconItem: 'Crop Pools' }, // Information on joint farming initiatives and how to participate
        { id: 5, icon: <FaLandmark />, iconItem: 'Land & Invest' }, // Information on land ownership opportunities and how to invest
        { id: 8, icon: <FaHeadset />, iconItem: 'Help Center' }, // Assistance and FAQs for new members
      ],
    };
  }

  render() {
    return (
      <Container style={{ backgroundColor: 'beige' }}>
        <Row>
          {this.state.iconItems.map((item) => (
            <Col key={item.id} className='App text-center a:hover::before'>
              <Link to={`/marketplace/${item.iconItem.toLowerCase()}`}>
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
