import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { BsSliders2, BsFillPersonFill, BsCalendar, BsPerson, BsInfoCircle } from 'react-icons/bs';
import { ListGroup, Tooltip, OverlayTrigger } from 'react-bootstrap';

function Forum() {
  return (
    <Container fluid className='mt-4'>
      <Row className='mt-3'>
        <Col xs={10} className='mb-2'>
          <h4 className="services-header" style={{textAlign: 'left', marginBottom: '10px'}}>Crop Pools</h4>
        </Col>
        <Col xs={2}>
          <Button style={{backgroundColor: 'darkgreen'}}>
            + Propose
          </Button>
        </Col>
        <hr />
        <p style={{fontWeight: ''}}>
            Propose or join a farming initiative with customized produce requirements. Whether you're looking for a specific variety of tomatoes grown organically or a particular grade of corn, Crop Pools enable you to set the criteria. Farms across the network can join to fulfill your order collectively or individually, ensuring your specifications are met with precision and care.
          </p>
        <hr></hr>
        <Row xs={1} md={3} className="g-4 mb-5">
          {[
            {
              cropType: 'Tomatoes',
              requiredQuantity: '10000 kg',
              priceRange: '$0.50 - $0.70 per kg',
              deadline: '2023-11-30',
              deliveryTimeline: '2024-01-15',
              currentContributors: '15',
              pledgedQuantity: '7500 kg',
              qualityStandards: 'Grade A, No Pesticides',
              progress: 75,
              location: 'Nairobi, Kenya',
              rating: 4,
              proposer: 'John Doe',
              requirements: 'Sandy Loam Soil, Minimal Watering' // New property for requirements
            },
            // Add more crop pool objects
          ].map((cropPool, idx) => (
            <Col key={idx}>
              <Card className="shadow-sm" style={{backgroundColor: 'beige'}}>
                <Card.Body>
                  <Card.Title>{cropPool.cropType} Pool</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{cropPool.location}</Card.Subtitle>
                  <ListGroup variant="flush">
                    <ListGroup.Item><BsFillPersonFill /> Contributors: {cropPool.currentContributors}</ListGroup.Item>
                    <ListGroup.Item><BsCalendar /> Deadline: {cropPool.deadline}</ListGroup.Item>
                    <ListGroup.Item><BsPerson /> Proposed by: {cropPool.proposer}</ListGroup.Item>
                    <ListGroup.Item>Quality: {cropPool.qualityStandards}</ListGroup.Item>
                    <ListGroup.Item>Requirements: {cropPool.requirements}</ListGroup.Item>
                  </ListGroup>
                  <ProgressBar now={cropPool.progress} label={`${cropPool.progress}%`} className="my-3" variant="success" />
                  <Button variant="primary">Join Pool</Button>
                  <OverlayTrigger
                    placement="top"
                    overlay={<Tooltip id={`tooltip-${idx}`}>Click for more info about this pool</Tooltip>}
                  >
                    <Button variant="secondary" className="ms-2"><BsInfoCircle /> More Info</Button>
                  </OverlayTrigger>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Row>
    </Container>
  );
}

export default Forum;
