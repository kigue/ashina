import React, { Component } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

class QualityModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: {
        organicCertification: false,
        nonGMO: false,
        gradeRating: 'A', // Defaulting to Grade A, can be changed
        pesticideFree: false,
        reducedPesticideUse: false,
        cageFree: false,
        handcrafted: false,
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

  applyQualityFilter = () => {
    this.props.onQualityFilter(this.state.filters); // Pass quality filters to SubNav
    this.props.onClose();
  };

  render() {
    const { filters } = this.state;

    return (
      <Modal show={this.props.show} onHide={this.props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select Quality</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* Checkboxes for Quality Filters */}
            <Row>
              <Col xs={12}>
                <Form.Check 
                  type="checkbox" 
                  label="Organic Certification" 
                  name="organicCertification"
                  checked={filters.organicCertification}
                  onChange={this.handleCheckboxChange} 
                />
                <Form.Check 
                  type="checkbox" 
                  label="Non-GMO" 
                  name="nonGMO"
                  checked={filters.nonGMO}
                  onChange={this.handleCheckboxChange} 
                />
                <Form.Check 
                  type="checkbox" 
                  label="Pesticide-Free" 
                  name="pesticideFree"
                  checked={filters.pesticideFree}
                  onChange={this.handleCheckboxChange} 
                />
                <Form.Check 
                  type="checkbox" 
                  label="Reduced Pesticide Use" 
                  name="reducedPesticideUse"
                  checked={filters.reducedPesticideUse}
                  onChange={this.handleCheckboxChange} 
                />
                <Form.Check 
                  type="checkbox" 
                  label="Cage-Free" 
                  name="cageFree"
                  checked={filters.cageFree}
                  onChange={this.handleCheckboxChange} 
                />
                <Form.Check 
                  type="checkbox" 
                  label="Handcrafted" 
                  name="handcrafted"
                  checked={filters.handcrafted}
                  onChange={this.handleCheckboxChange} 
                />
              </Col>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.applyQualityFilter}>Apply</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default QualityModal;
