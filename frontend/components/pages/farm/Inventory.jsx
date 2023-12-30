import React, { useState } from 'react';
import { Container, Row, Col, Table, Button, Modal, Form } from 'react-bootstrap';
import { BsPencilSquare, BsPlusCircle } from 'react-icons/bs';

function FarmInventory() {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleCreateClose = () => setShowCreateModal(false);
  const handleCreateShow = () => setShowCreateModal(true);

  const handleEditClose = () => setShowEditModal(false);
  const handleEditShow = () => setShowEditModal(true);

  // Example data for the inventory table
  const inventoryItems = [
    { id: 1, item: 'Apple Trees', category: 'Crops', quantity: '50', status: 'Good' },
    // ... more inventory items
  ];

  return (
    <Container>
     <Row className='mt-4 align-items-center'>
        <Col xs={12} md={6} lg={8} xl={9}>
          <h3 style={{ textAlign: 'left' }}>Inventory</h3>
        </Col>
        <Col xs={12} md={6} lg={4} xl={3} className="text-md-right text-lg-left">
          <Button style={{ backgroundColor: 'darkgreen' }} variant="primary" onClick={handleCreateShow} className="mb-3 mt-3 mt-md-0">
            <BsPlusCircle /> Add Item
          </Button>
        </Col>
        <hr></hr>
      </Row>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Item</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventoryItems.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.item}</td>
              <td>{item.category}</td>
              <td>{item.quantity}</td>
              <td>{item.status}</td>
              <td>
                <Button variant="info" onClick={handleEditShow}>
                  <BsPencilSquare />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Create Inventory Item Modal */}
      <Modal show={showCreateModal} onHide={handleCreateClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Inventory Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* Form fields for adding an inventory item */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCreateClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCreateClose}>
            Save Item
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Inventory Item Modal */}
      <Modal show={showEditModal} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Inventory Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* Form fields for editing an inventory item */}
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
  );
}

export default FarmInventory;
