import React, { useState } from 'react';
import { Container, Row, Col, Table, Button, Modal, Form } from 'react-bootstrap';
import { BsPencilSquare, BsEye } from 'react-icons/bs';

function FarmOrders() {
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const handleDetailsClose = () => setShowDetailsModal(false);
  const handleDetailsShow = () => setShowDetailsModal(true);

  // Example data for the table
  const orders = [
    { id: 1, customer: 'John Doe', items: 'Apples, Bananas', quantity: '10kg, 5kg', total: '$30', status: 'Pending' },
    // ... more orders
  ];

  return (
    <Container>
      <Row className='mt-4'>
        <Col>
          <h3 style={{ textAlign: 'left' }}>Farm Orders</h3>
        </Col>
      </Row>
      <hr />

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Items</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.items}</td>
              <td>{order.quantity}</td>
              <td>{order.total}</td>
              <td>{order.status}</td>
              <td>
                <Button variant="secondary" onClick={handleDetailsShow}>
                  <BsEye />
                </Button>
                {' '}
                <Button variant="info">
                  <BsPencilSquare />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Order Details Modal */}
      <Modal show={showDetailsModal} onHide={handleDetailsClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Details of the order */}
          <Form>
            {/* Form fields or information display */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDetailsClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Additional features like filtering, searching, etc., can be added here */}
    </Container>
  );
}

export default FarmOrders;
