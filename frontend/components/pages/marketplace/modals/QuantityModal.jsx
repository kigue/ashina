import React, { Component } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

class QuantityModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        subscription: false,
        bulkPackaging: false,
        individualPackaging: false,
        smallQuantity: false,
        mediumQuantity: false,
        largeQuantity: false,
        unitKilograms: false,
        unitPounds: false,
        unitLiters: false,
        unitItems: false,
      }
    };
  }

  handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    this.setState(prevState => ({
      filters: {
        ...prevState.filters,
        [name]: checked
      }
    }));
  };

  applyQuantityFilter = () => {
    // Logic to apply quantity filter
    this.props.onClose(); // Close modal after applying filter
  };

  render() {
    const { filters } = this.state;

    return (
      <Modal show={this.props.show} onHide={this.props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select Quantity Options</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* Checkboxes for Quantity Filters */}
            <Row>
              <Col xs={12}>
                <Form.Check 
                  type="checkbox" 
                  label="Subscription" 
                  name="subscription"
                  checked={filters.subscription}
                  onChange={this.handleCheckboxChange} 
                />
                <Form.Check 
                  type="checkbox" 
                  label="Bulk Packaging" 
                  name="bulkPackaging"
                  checked={filters.bulkPackaging}
                  onChange={this.handleCheckboxChange} 
                />
                <Form.Check 
                  type="checkbox" 
                  label="Individual Packaging" 
                  name="individualPackaging"
                  checked={filters.individualPackaging}
                  onChange={this.handleCheckboxChange} 
                />
                <Form.Check 
                  type="checkbox" 
                  label="Small Quantity" 
                  name="smallQuantity"
                  checked={filters.smallQuantity}
                  onChange={this.handleCheckboxChange} 
                />
                <Form.Check 
                  type="checkbox" 
                  label="Medium Quantity" 
                  name="mediumQuantity"
                  checked={filters.mediumQuantity}
                  onChange={this.handleCheckboxChange} 
                />
                <Form.Check 
                  type="checkbox" 
                  label="Large Quantity" 
                  name="largeQuantity"
                  checked={filters.largeQuantity}
                  onChange={this.handleCheckboxChange} 
                />
                <Form.Check 
                  type="checkbox" 
                  label="Kilograms" 
                  name="unitKilograms"
                  checked={filters.unitKilograms}
                  onChange={this.handleCheckboxChange} 
                />
                <Form.Check 
                  type="checkbox" 
                  label="Pounds" 
                  name="unitPounds"
                  checked={filters.unitPounds}
                  onChange={this.handleCheckboxChange} 
                />
                <Form.Check 
                  type="checkbox" 
                  label="Liters" 
                  name="unitLiters"
                  checked={filters.unitLiters}
                  onChange={this.handleCheckboxChange} 
                />
                <Form.Check 
                  type="checkbox" 
                  label="Items" 
                  name="unitItems"
                  checked={filters.unitItems}
                  onChange={this.handleCheckboxChange} 
                />
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.applyQuantityFilter}>Apply</Button>
        </Modal.Footer>
      </Modal>
    );
 }
}

export default QuantityModal;
