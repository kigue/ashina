import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class SubNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLocation: 'Chicago, IL',
      selectedItem: 'Blueberries',
    };
  }

  handleLocationChange = (event) => {
    this.setState({ selectedLocation: event.target.value });
  };

  handleItemChange = (event) => {
    this.setState({ selectedItem: event.target.value });
  };

  render() {
    return (
      <Container style={{ height: '55px', backgroundColor: 'white', borderRadius: '10px', width: '600px' }}>
        <Row style={{ fontSize: '13px', fontWeight: 'bold' }}>
          <Col xs={4} style={{ borderRight: '1px solid' }}>
            <label htmlFor="locationSelect">Location:</label>
            <select
              id="locationSelect"
              className="form-select"
              style={{ fontSize: '12px', padding: '5px' }}
              value={this.state.selectedLocation}
              onChange={this.handleLocationChange}
            >
              <option value="Chicago, IL">Chicago, IL</option>
              {/* Add more location options here */}
            </select>
          </Col>
          <Col xs={4} style={{ borderRight: '1px solid' }}>
            <label htmlFor="itemSelect">Job Type:</label>
            <select
              id="itemSelect"
              className="form-select"
              style={{ fontSize: '12px', padding: '5px' }}
              value={this.state.selectedItem}
              onChange={this.handleItemChange}
            >
              <option value="Blueberries">Blueberries</option>
              {/* Add more item options here */}
            </select>
          </Col>
          <Col xs={4}>
            <label htmlFor="pricingSelect">Pricing:</label>
            <select
              id="pricingSelect"
              className="form-select"
              style={{ fontSize: '12px', padding: '5px' }}
              value={this.state.selectedPricing}
              onChange={this.handlePricingChange}
            >
              <option value="Expensive">Expensive</option>
              <option value="Moderate">Moderate</option>
              <option value="Affordable">Affordable</option>
              {/* Add more pricing options here */}
            </select>
          </Col>
          {/* Add more columns as needed */}
        </Row>
      </Container>
    );
  }
}

export default SubNav;
