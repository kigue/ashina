import React from 'react';
import { Container, Row, Col, Card, Tabs, Tab } from 'react-bootstrap';

function HomeCards() {
  return (
    <Container fluid className='mt-4 mb-3'>
      {/* Dashboard Header */}
      <Row>
        <Col xs={12} md={2}>
          <h2 style={{ textAlign: 'left', fontSize: '25px' }}>My Dashboard</h2>
        </Col>
        <Col xs={12} md={10}>
          <hr></hr>
        </Col>
      </Row>

      {/* User Info and Other Card */}
      <Row>
        <Col xs={12} md={8}>
          <Card style={{ backgroundColor: 'beige', height: '300px' }}>
            <Row>
              <Col sm={4} style={{ textAlign: 'center' }}>
                {/* Image Placeholder */}
                <div style={{ marginTop: '20px' }}>
                  <img src="https://via.placeholder.com/150" alt="User" style={{ borderRadius: '50%' }} />
                </div>
                {/* Name Placeholder */}
                <h4 style={{ marginTop: '25px' }}>Sunny Farms</h4>
              </Col>
              <Col sm={8}>
                {/* Farm Information Placeholders */}
                <Row style={{ textAlign: 'left', marginTop: '20px' }}>
                  <Col xs={6} className='mt-4'>
                    <p className='mb-3'><strong>Email:</strong> johndoe@example.com</p>
                    <p className='mb-3'><strong>Phone:</strong> +123456789</p>
                    <p><strong>Address:</strong> 123 Farm Street</p>
                  </Col>
                  <Col xs={6} className='mt-4'>
                    <p className='mb-3'><strong>Member Since:</strong> 2020</p>
                    <p><strong>Contribution Score:</strong> 85</p>
                    {/* Additional farm information here */}
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Col>
        {/* Additional Card for other content */}
        <Col xs={12} md={4}>
          <Card style={{ backgroundColor: 'beige', height: '300px' }}>
            {/* Card content */}
          </Card>
        </Col>
      </Row>

      {/* Proposals and Rewards Headers */}
      <Row>
        <Col xs={12} md={2}>
          <h2 style={{ textAlign: 'left', fontSize: '25px' }}>Proposals</h2>
        </Col>
        <Col xs={12} md={4}>
          <hr></hr>
        </Col>
        <Col xs={12} md={2}>
          <h2 style={{ textAlign: 'left', fontSize: '25px' }}>Rewards</h2>
        </Col>
        <Col xs={12} md={4}>
          <hr></hr>
        </Col>
      </Row>

      {/* Proposals and Rewards Cards */}
      <Row>
        <Col xs={12} md={6}>
          <Card style={{ backgroundColor: 'beige', marginTop: '5px', height: '300px' }}>
            <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
              <Tab eventKey="home" title="Upcoming Proposals">
                {/* Tab content for Home */}
              </Tab>
              <Tab eventKey="profile" title="Recently Voted">
                {/* Tab content for Profile */}
              </Tab>
            </Tabs>
          </Card>
        </Col>
        <Col xs={12} md={6}>
          <Card style={{ backgroundColor: 'beige', marginTop: '5px', height: '300px' }}>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
              <Tab eventKey="home" title="Staking">
                {/* Tab content for Home */}
              </Tab>
              <Tab eventKey="profile" title="Other Activity">
                {/* Tab content for Profile */}
              </Tab>
            </Tabs>
          </Card>
        </Col>
      </Row>

      {/* Additional content can be added here */}
      {/* ... */}
    </Container>
  );
}

export default HomeCards;
