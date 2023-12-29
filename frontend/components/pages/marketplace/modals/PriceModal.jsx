import React, { Component } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

class PriceModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minPrice: 0,
      maxPrice: 100, // Set a default max price or adjust based on your product range
      discountOnly: false,
      bulkDiscountOnly: false,
      subscriptionPricingOnly: false,
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCheckboxChange = (event) => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  applyPriceFilter = () => {
    const { minPrice, maxPrice, discountOnly, bulkDiscountOnly, subscriptionPricingOnly } = this.state;
    this.props.onPriceFilter({ minPrice, maxPrice, discountOnly, bulkDiscountOnly, subscriptionPricingOnly });
    this.props.onClose();
  };
  render() {
    const { minPrice, maxPrice, discountOnly, bulkDiscountOnly, subscriptionPricingOnly } = this.state;

    return (
      <Modal show={this.props.show} onHide={this.props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select Price Range</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* Input for Custom Price Range */}
            <Row>
              <Col xs={6}>
                <Form.Label>Minimum Price</Form.Label>
                <Form.Control 
                  type="number" 
                  name="minPrice" 
                  value={minPrice} 
                  onChange={this.handleInputChange} 
                />
              </Col>
              <Col xs={6}>
                <Form.Label>Maximum Price</Form.Label>
                <Form.Control 
                  type="number" 
                  name="maxPrice" 
                  value={maxPrice} 
                  onChange={this.handleInputChange} 
                />
              </Col>
            </Row>
            
            {/* Checkboxes for Special Pricing Options */}
            <Form.Check 
              type="checkbox" 
              label="Discounts Only" 
              name="discountOnly"
              checked={discountOnly}
              onChange={this.handleCheckboxChange} 
            />
            <Form.Check 
              type="checkbox" 
              label="Bulk Purchase Discounts" 
              name="bulkDiscountOnly"
              checked={bulkDiscountOnly}
              onChange={this.handleCheckboxChange} 
            />
            <Form.Check 
              type="checkbox" 
              label="Subscription Pricing Only" 
              name="subscriptionPricingOnly"
              checked={subscriptionPricingOnly}
              onChange={this.handleCheckboxChange} 
            />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.applyPriceFilter}>Apply</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default PriceModal;
