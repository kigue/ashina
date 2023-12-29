import React, { useState } from 'react';
import { Card, Col, Row, Container, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import if using React Router
import SubNav from '../../marketplace/navigation/SubNav';
import farmShopImage1 from "../images/farmShopImage1.jpg";
import farmShopImage2 from "../images/farmShopImage2.jpg";
import farmShopImage3 from "../images/farmShopImage3.jpg";
import farmShopImage4 from "../images/farmShopImage4.jpg";
import farmShopImage5 from "../images/farmShopImage5.jpg";
import farmShopImage6 from "../images/farmShopImage6.jpg";

function FarmCards() {
  const [filters, setFilters] = useState({
    location: { city: '' },
    itemType: [],
    quality: {}
  });

  // Mock farm shops data
  const mockFarmShops = [
    {
      id: "farm1",
      name: "Porto-Novo Cassava Farm",
      description: "We produce the highest quality Cassava in southern Benin.",
      imageUrl: farmShopImage1,
      location: { country: 'Africa', city: 'Benin' },
      tags: ["Cassava", "Cocoa", "Banana", "Organic", "Non-GMO"]
    },
    {
      name: "Sunny Meadows Orchard",
      description: "Apples and honey, straight from our orchards.",
      imageUrl: farmShopImage2,
      location: { country: 'USA', city: 'Springfield', coordinates: [39.7817, -89.6501] },
      tags: ["Apples", "Honey", "Banana", "Organic", "Non-GMO"]
    },
    {
      name: "Mountain View Dairy",
      description: "Fresh dairy products from our free-range cows.",
      imageUrl: farmShopImage3,
      location: { country: 'Canada', city: 'Vancouver', coordinates: [49.2827, -123.1207] },
      tags: ["Milk", "Cheese", "Butter", "Pesticide-Free"]
    },
    {
      name: "Riverside Berries",
      description: "A variety of berries picked fresh daily.",
      imageUrl: farmShopImage4,
      location: { country: 'Canada', city: 'Toronto', coordinates: [43.6532, -79.3832] },
      tags: ["Strawberries", "Raspberries", "Blackberries", "Cage-Free"]
    },
    {
      name: "Countryside Bakery",
      description: "Artisanal breads and pastries, baked daily.",
      imageUrl: farmShopImage5,
      location: { country: 'UK', city: 'London', coordinates: [51.5074, -0.1278] },
      tags: ["Sourdough", "Croissants", "Pies", "Handcrafted"]
    },
    {
      name: "Hilltop Honey Farm",
      description: "Raw, unfiltered honey and bee products.",
      imageUrl: farmShopImage6,
      location: { country: 'UK', city: 'Manchester', coordinates: [53.4808, -2.2426] },
      tags: ["Honey", "Beeswax", "Royal Jelly", "Organic"]
    }
  ];

  const navigate = useNavigate(); // Initialize the navigate function using the useNavigate hook


  // Filtering logic
  const filteredFarmShops = mockFarmShops.filter(shop => {
    let isLocationMatch = filters.location.city ? shop.location.city === filters.location.city : true;
    let isItemTypeMatch = filters.itemType.length > 0 ? filters.itemType.some(item => shop.tags.includes(item)) : true;
    let isQualityMatch = true;

    // Implement quality filtering logic
    if (filters.quality.organicCertification) {
      isQualityMatch = shop.tags.includes("Organic");
    }
    let isPriceMatch = true;
    if (filters.price) {
      // Example logic: check if the shop's products fall within the selected price range
      // You need to define how you want to apply the price filter to your data
    }

    return isLocationMatch && isItemTypeMatch && isQualityMatch && isPriceMatch;
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleFarmCardClick = (farmId) => {
    navigate(`/indfarm/${farmId}`); // Navigate to individual farm page
  };

  return (
    <Container fluid className='mt-4'>
      <Row className='mt-3'>
        <Col xs={2}>
          <h4 className="services-header" style={{ textAlign: 'left' }}>Farm Shops</h4>
        </Col>
        <Col xs={8}>
          <SubNav onFilterChange={handleFilterChange} filters={filters} />
        </Col>
      </Row>
      <hr />
      <Row xs={1} md={3} className="g-4"> {/* Adjusted for consistent width in grid */}
      {filteredFarmShops.map((shop, idx) => (
        <Col key={idx} onClick={() => handleFarmCardClick(shop.id)}>
          <Card className="h-100" style={{ backgroundColor: 'beige', textAlign: 'left', cursor: 'pointer' }}> {/* Removed inline width style */}
            <Card.Img variant="top" src={shop.imageUrl} style={{ height: '200px', objectFit: 'cover' }} /> {/* Added object-fit */}
            <Card.Body style={{ minHeight: '150px' }}> {/* Added min-height */}
              <Card.Title>{shop.name}</Card.Title>
              <medium className="text-muted">{shop.location.city}, {shop.location.country}</medium>
              <Card.Text>
                {shop.description}
                <br />
              </Card.Text>
              {shop.tags.map(tag => (
                <Badge pill bg="secondary" className="me-1" key={tag}>
                  {tag}
                </Badge>
              ))}
              <br />
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </Container>
  );
}

export default FarmCards;
