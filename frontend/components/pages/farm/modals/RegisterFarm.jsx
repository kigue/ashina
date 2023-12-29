import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function RegisterFarmModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Register New Farm</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formFarmName">
            <Form.Label>Farm Name</Form.Label>
            <Form.Control type="text" placeholder="Enter farm name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          {/* Add more fields as needed */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Register Farm
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default RegisterFarmModal;
