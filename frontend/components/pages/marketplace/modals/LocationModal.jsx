import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

class LocationModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCountry: '',
      selectedCity: '',
      mileLimit: 0,
      cities: [],
    };
  }

  handleCountryChange = (event) => {
    const country = event.target.value;
    this.setState({ selectedCountry: country, cities: this.getCitiesByCountry(country), selectedCity: '' });
  };

  handleCityChange = (event) => {
    this.setState({ selectedCity: event.target.value });
  };

  handleMileLimitChange = (event) => {
    this.setState({ mileLimit: event.target.value });
  };

  getCitiesByCountry = (country) => {
    // Add your countries and cities here
    const countryCities = {
      'USA': ['All', 'Chicago', 'New York', 'Los Angeles'],
      'Canada': ['All', 'Toronto', 'Vancouver', 'Montreal'],
      'UK': ['All', 'London', 'Manchester', 'Edinburgh'],
      // Add more countries and cities as needed
    };
    return countryCities[country] || [];
  };

  applyLocationFilter = () => {
    const { selectedCountry, selectedCity, mileLimit } = this.state;
    this.props.onLocationFilter({ country: selectedCountry, city: selectedCity, mileLimit });
    this.props.onClose();
  };

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* Country Selection */}
            <Form.Group className="mb-3">
              <Form.Label>Country</Form.Label>
              <Form.Control as="select" value={this.state.selectedCountry} onChange={this.handleCountryChange}>
                <option value="">All</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="UK">UK</option>
                {/* ...other countries */}
              </Form.Control>
            </Form.Group>

            {/* City Selection */}
            <Form.Group className="mb-3">
              <Form.Label>City</Form.Label>
              <Form.Control as="select" value={this.state.selectedCity} onChange={this.handleCityChange} disabled={!this.state.selectedCountry}>
                <option value="">All</option>
                {this.state.cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </Form.Control>
            </Form.Group>

            {/* Mile Limit */}
            <Form.Group className="mb-3">
              <Form.Label>Mile Limit from City</Form.Label>
              <Form.Control type="number" placeholder="Enter mile limit" value={this.state.mileLimit} onChange={this.handleMileLimitChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.applyLocationFilter}>Apply</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default LocationModal;
