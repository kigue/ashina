import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class WalletNav extends Component {
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
        <Container style={{ height: '55px', backgroundColor: 'white', borderRadius: '10px', width: '150px' }}>
          <Row style={{ fontSize: '13px', fontWeight: 'bold'}}>
            <Col xs={3} style={{borderRight: '1px solid' }}>
            </Col>
            </Row>
        </Container>
        

        
    );
  }
}

export default WalletNav;
