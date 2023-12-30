import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsPinMap, BsPencilSquare, BsTag, BsBasket, BsStar, BsRouter } from 'react-icons/bs';
import LocationModal from '../modals/LocationModal'
import ItemTypeModal from '../modals/ItemTypeModal';
import QualityModal from '../modals/QualityModal';
import PriceModal from '../modals/PriceModal'


class SubNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      currentFilter: '',
    };
  }

  handleFilterClick = (filterName) => {
    this.setState({ showModal: true, currentFilter: filterName });
  };

  closeModals = () => {
    this.setState({ showModal: false });
  };

  handleLocationFilter = (locationData) => {
    this.props.onFilterChange({ ...this.props.filters, location: locationData });
    this.closeModals();
  };

  renderQuantityFilterText = () => {
    // Logic to format the displayed text for the quantity filters
    // Example: "Small, Kilograms" or "All"
    // Update this based on your specific requirements
  };

  handleItemTypeFilter = (selectedItems) => {
    this.props.onFilterChange({ ...this.props.filters, itemType: selectedItems });
    this.closeModals();
  };

  handleQualityFilter = (qualityData) => {
    this.props.onFilterChange({ ...this.props.filters, quality: qualityData });
    this.closeModals();
  };

  handleQuantityFilter = (quantityData) => {
    this.props.onFilterChange({ ...this.props.filters, quantity: quantityData });
    this.closeModals();
  };

  handlePriceFilter = (priceData) => {
    this.props.onFilterChange({ ...this.props.filters, price: priceData });
    this.closeModals();
  };


  formatQualityFilters = (qualityFilters) => {
    return Object.keys(qualityFilters)
      .filter(key => qualityFilters[key])
      .map(key => key.replace(/([A-Z])/g, ' $1').trim()) // Formats camelCase to regular text
      .join(', ') || 'All';
  };

  renderLocationFilterText = () => {
    const { city, country } = this.props.filters.location;
    if (!city && !country) return "All";
    return city || country;
  };

  render() {
    const { filters } = this.props;

    return (
      <Container style={{ backgroundColor: 'beige', borderRadius: '5px', width: '750px' }}>
        <Row style={{ fontSize: '13px', fontFamily: 'sans-serif', textAlign: 'left' }}>
          {/* Location Filter */}
          <Col xs={2} style={{ borderRight: '1px solid' }}>
            <label style={{ fontWeight: 'bold' }} className="d-flex align-items-center justify-content-start">
              <BsPinMap />&nbsp;Location:
            </label>
            <span onClick={() => this.handleFilterClick('Location')} style={{ cursor: 'pointer' }}>
              {this.renderLocationFilterText()} <BsPencilSquare />
            </span>
          </Col>

          {/* Item Type Filter */}
          <Col xs={2} style={{ borderRight: '1px solid' }}>
            <label style={{ fontWeight: 'bold' }} className="d-flex align-items-center justify-content-start">
              <BsRouter />&nbsp;Item Type:
            </label>
            <span onClick={() => this.handleFilterClick('ItemType')} style={{ cursor: 'pointer' }}>
              {filters.itemType && filters.itemType.length > 0 ? filters.itemType.join(', ') : "All"} <BsPencilSquare />
            </span>
          </Col>

          {/* Quality Filter */}
          <Col xs={2} style={{ borderRight: '1px solid' }}>
            <label style={{ fontWeight: 'bold' }} className="d-flex align-items-center justify-content-start">
              <BsStar />&nbsp;Quality:
            </label>
            <span onClick={() => this.handleFilterClick('Quality')} style={{ cursor: 'pointer' }}>
              {this.formatQualityFilters(filters.quality) || "All"} <BsPencilSquare />
            </span>
          </Col>

           {/* Quantity Filter */}
           <Col xs={2} style={{ borderRight: '1px solid' }}>
            <label style={{ fontWeight: 'bold' }} className="d-flex align-items-center justify-content-start">
              <BsBasket />&nbsp;Quantity:
            </label>
            <span onClick={() => this.handleFilterClick('Quantity')} style={{ cursor: 'pointer' }}>
              {this.renderQuantityFilterText()} <BsPencilSquare />
            </span>
          </Col>

          <Col xs={2} style={{ borderRight: '1px solid' }}>
            <label style={{ fontWeight: 'bold' }} className="d-flex align-items-center justify-content-start">
              <BsTag />&nbsp;Price:
            </label>
            <span onClick={() => this.handleFilterClick('Price')} style={{ cursor: 'pointer' }}>
              {filters.price ? `${filters.price.minPrice} - ${filters.price.maxPrice}` : "All"} <BsPencilSquare />
            </span>
          </Col>
          <Col xs={2} style={{ borderRight: '1px solid' }}>
            <label style={{ fontWeight: 'bold' }} className="d-flex align-items-center justify-content-start">
              <BsTag />&nbsp;Misc:
            </label>
            <span onClick={() => this.handleFilterClick('Price')} style={{ cursor: 'pointer' }}>
              {filters.price ? `${filters.price.minPrice} - ${filters.price.maxPrice}` : "All"} <BsPencilSquare />
            </span>
          </Col>
        </Row>

        {/* Location Modal */}
        <LocationModal
          show={this.state.showModal && this.state.currentFilter === 'Location'}
          onClose={this.closeModals}
          onLocationFilter={this.handleLocationFilter}
        />

        {/* ItemType Modal */}
        <ItemTypeModal
          show={this.state.showModal && this.state.currentFilter === 'ItemType'}
          onClose={this.closeModals}
          onItemTypeFilter={this.handleItemTypeFilter}
        />

        {/* Quality Modal */}
        <QualityModal
          show={this.state.showModal && this.state.currentFilter === 'Quality'}
          onClose={this.closeModals}
          onQualityFilter={this.handleQualityFilter}
        />

        <PriceModal
          show={this.state.showModal && this.state.currentFilter === 'Price'}
          onClose={this.closeModals}
          onPriceFilter={this.handlePriceFilter}
        />
      </Container>
    );
  }
}

export default SubNav
