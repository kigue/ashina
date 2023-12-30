import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function GovernanceHomePage() {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h3>Ashina Governance</h3>
          <hr></hr>
          <p>Welcome to the Ashina Governance page. Here you can find information about how our platform is managed, our decision-making processes, community engagement, and more.</p>
        </Col>
      </Row>
      
      <Row>
        {/* Governance Overview Card */}
        <Col md={6} lg={4} >
          <Card className="mb-3" style={{backgroundColor: 'beige'}}>
            <Card.Body>
              <Card.Title>Overview of Governance</Card.Title>
              <hr></hr>
              <Card.Text>
                Learn about our governance model and key principles.
              </Card.Text>
              <Button style={{backgroundColor: 'darkgreen'}} variant="primary" as={Link} to="/governance/overview">
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Policies and Regulations Card */}
        <Col md={6} lg={4}>
          <Card className="mb-3" style={{backgroundColor: 'beige'}}>
            <Card.Body>
              <Card.Title>Proposals and Voting</Card.Title>
              <hr></hr>
              <Card.Text>
                Explore the policies governing our marketplace and community.
              </Card.Text>
              <Button style={{backgroundColor: 'darkgreen'}} variant="primary" as={Link} to="/governance/policies">
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>

        {/* Community Engagement Card */}
        <Col md={6} lg={4}>
          <Card className="mb-3" style={{backgroundColor: 'beige'}}>
            <Card.Body>
              <Card.Title>Community Engagement</Card.Title>
              <hr></hr>
              <Card.Text>
                Discover how to get involved in community proposals and voting.
              </Card.Text>
              <Button style={{backgroundColor: 'darkgreen'}} variant="primary" as={Link} to="/governance/community">
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={{ span: 6, offset: 0 }} lg={{ span: 4, offset: 2 }}>
          <Card className="mb-3" style={{backgroundColor: 'beige'}}>
            <Card.Body>
              <Card.Title>Ethics and Compliance</Card.Title>
              <hr></hr>
              <Card.Text>
                Discover how to get involved in community proposals and voting.
              </Card.Text>
              <Button style={{backgroundColor: 'darkgreen'}} variant="primary" as={Link} to="/governance/community">
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4}>
          <Card className="mb-3" style={{backgroundColor: 'beige'}}>
            <Card.Body>
              <Card.Title>Sustainability Efforts</Card.Title>
              <hr></hr>
              <Card.Text>
                Discover how to get involved in community proposals and voting.
              </Card.Text>
              <Button style={{backgroundColor: 'darkgreen'}} variant="primary" as={Link} to="/governance/community">
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        
        {/* Other cards for different sections can be added similarly */}
      </Row>

      {/* Additional sections and content can be added here */}
    </Container>
  );
}

export default GovernanceHomePage;
