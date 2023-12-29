import React, { useState } from 'react';
import { Container, Table, Button, Modal, Form, Row, Col } from 'react-bootstrap';
import { BsPencilSquare, BsTrash, BsPlusCircle } from 'react-icons/bs';

function FarmListings() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleCreateClose = () => setShowCreateModal(false);
  const handleCreateShow = () => setShowCreateModal(true);

  const handleEditClose = () => setShowEditModal(false);
  const handleEditShow = () => setShowEditModal(true);

  // Dummy data for the example
  const listings = [
    { id: 1, item: 'Tomatoes', category: 'Produce', quantity: '100kg', price: '$50' },
    // ... more listings
  ];

  return (
    <>
<Container>
   <Row className='mt-4 align-items-center'>
        <Col xs={12} md={6} lg={8} xl={9}>
          <h3 style={{ textAlign: 'left' }}>Listings</h3>
        </Col>
        <Col xs={12} md={6} lg={4} xl={3} className="text-md-right text-lg-left">
          <Button style={{ backgroundColor: 'darkgreen' }} variant="primary" onClick={handleCreateShow} className="mb-3 mt-3 mt-md-0">
            <BsPlusCircle /> New Listing
          </Button>
        </Col>
        <hr></hr>
      </Row>

    <Table style={{backgroundColor: 'beige'}} striped bordered hover>
        <thead >
          <tr>
            <th>ID</th>
            <th>Item</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {listings.map(listing => (
            <tr key={listing.id}>
              <td>{listing.id}</td>
              <td>{listing.item}</td>
              <td>{listing.category}</td>
              <td>{listing.quantity}</td>
              <td>{listing.price}</td>
              <td>
                <Button variant="secondary" onClick={handleEditShow}>
                  <BsPencilSquare />
                </Button>
                {' '}
                <Button variant="danger">
                  <BsTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Create Listing Modal */}
      <Modal show={showCreateModal} onHide={handleCreateClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Farm Listing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* Form fields for creating a listing */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCreateClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCreateClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Listing Modal */}
      <Modal show={showEditModal} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Farm Listing</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* Form fields for editing a listing */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEditClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
    </>
  );
}

export default FarmListings;
