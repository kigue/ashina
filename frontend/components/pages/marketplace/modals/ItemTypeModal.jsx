import React, { Component } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

class ItemTypeModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCategory: '',
      items: [], // Items will be populated based on the selected category
      selectedItems: {} // Tracks which items are checked
    };
  }

  handleCategoryChange = (event) => {
    const category = event.target.value;
    this.setState({ 
      selectedCategory: category, 
      items: this.getItemsByCategory(category) 
    });
  };

  getItemsByCategory = (category) => {
    // Logic to fetch items based on the selected category
    // Placeholder data for now
    const items = {
      'Fruits': ['Banana', 'Grapefruit', 'Cherry'],
      'Meats': ['Beef', 'Chicken', 'Pork'],
      'Vegetables': ['Carrot', 'Broccoli', 'Spinach'],
      // ...other categories
    };
    return items[category] || [];
  };

  handleItemCheck = (itemName) => {
    this.setState(prevState => ({
      selectedItems: {
        ...prevState.selectedItems,
        [itemName]: !prevState.selectedItems[itemName]
      }
    }));
  };

  applyItemTypeFilter = () => {
    const selectedItems = Object.keys(this.state.selectedItems).filter(item => this.state.selectedItems[item]);
    this.props.onItemTypeFilter(selectedItems); // Pass selected items back to SubNav
    this.props.onClose();
  };

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Select Item Type</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* Category Selection */}
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Control as="select" onChange={this.handleCategoryChange}>
                <option value="">Select Category</option>
                <option value="Fruits">Fruits</option>
                <option value="Meats">Meats</option>
                <option value="Vegetables">Vegetables</option>
                {/* Add other categories */}
              </Form.Control>
            </Form.Group>

            {/* Items Selection */}
            <Form.Group>
              <Row>
                {this.state.items.map(item => (
                  <Col xs={12} sm={6} key={item}>
                    <Form.Check 
                      type="checkbox" 
                      label={item} 
                      checked={!!this.state.selectedItems[item]}
                      onChange={() => this.handleItemCheck(item)} 
                    />
                  </Col>
                ))}
              </Row>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.applyItemTypeFilter}>Apply</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ItemTypeModal;
