import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { HiMenu} from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";


class ProfileNav extends Component {
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
        <Container style={{ height: '45px', backgroundColor: 'beige', borderRadius: '10px', width: '75px' }}>
          <Row>
            <Col xs={6}>
            <HiMenu style={{ marginRight: '100px', marginTop: '13px', height: '20px', }} />
            </Col>
            <Col xs={6} style={{backgroundColor: ''}}>
            {/* <AiOutlineUser style={{ marginRight: '', marginTop: '13px', height: '30px', }} /> */}
            </Col>
          </Row>
        </Container>
        

        
    );
  }
}

export default ProfileNav;
