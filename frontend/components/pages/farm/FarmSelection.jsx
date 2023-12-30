import React, { useState } from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import RegisterFarmModal from '../farm/modals/RegisterFarm'; // Import the modal component

function FarmSelection() {
  // Mock data for the farms (replace or expand as needed)
  const farms = [
    { name: "Green Valley Farms", description: "Organic produce and sustainable practices." },
    { name: "Sunny Meadows", description: "Specializing in dairy and poultry." },
    { name: "Riverside Orchards", description: "A variety of fruit trees and vineyards." },
    { name: "Mountain View Fields", description: "Wheat and corn fields, with modern technology." },
  ];

  // State for showing/hiding the modal
  const [showModal, setShowModal] = useState(false);

  // Handlers for the modal
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <Container>
      <Row className='mt-4'>
        <Col xs={9} style={{textAlign: 'left'}}>
          <h3>Select a Farm:</h3>
        </Col>
        <Col xs={3} style={{textAlign: 'right'}}>
          <Button style={{backgroundColor: 'darkgreen'}} variant="primary" onClick={handleShowModal}>
            + Register Farm
          </Button>
        </Col>
      </Row>
      <hr />

      <Row xs={1} md={2} className="g-4 mb-5">
        {farms.map((farm, idx) => (
          <Col key={idx}>
            <Card style={{backgroundColor: 'beige'}}>
              <Card.Header>{farm.name}</Card.Header>
              <Card.Body>
                <Card.Title>{farm.name}</Card.Title>
                <Card.Text>{farm.description}</Card.Text>
                <Button variant="success">Choose This Farm</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Register Farm Modal */}
      <RegisterFarmModal show={showModal} handleClose={handleCloseModal} />
    </Container>
  );
}

export default FarmSelection;
