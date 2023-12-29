import React, { useState } from 'react';
import { Card, Col, Row, Container, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import if using React Router
import landImage1 from "../images/farmShopImage1.jpg";
import landImage2 from "../images/farmShopImage2.jpg";
import landImage3 from "../images/farmShopImage3.jpg";

function LandCards() {
  const [filters, setFilters] = useState({
    location: { city: '' },
    size: [],
    priceRange: {}
  });

  // Mock land data
  const mockLands = [
    {
      id: "land1",
      name: "Green Valley Acres",
      description: "50 acres of fertile land ideal for organic farming.",
      imageUrl: landImage1,
      location: { country: 'USA', city: 'Oregon' },
      size: "50 Acres",
      price: "$200,000",
      tags: ["Fertile Soil", "Water Access", "Organic"]
    },
    {
      id: "land2",
      name: "Sunny Meadows Ranch",
      description: "100 acres of land with potential for dairy farming.",
      imageUrl: landImage2,
      location: { country: 'Canada', city: 'Alberta' },
      size: "100 Acres",
      price: "$500,000",
      tags: ["Pasture", "Barn", "Dairy"]
    },
    {
      id: "land3",
      name: "Riverside Farm Land",
      description: "75 acres near a river, perfect for crop cultivation.",
      imageUrl: landImage3,
      location: { country: 'USA', city: 'Mississippi' },
      size: "75 Acres",
      price: "$350,000",
      tags: ["Riverfront", "Irrigation", "Crops"]
    }
    // Add more land objects
  ];

  const navigate = useNavigate(); // Initialize the navigate function using the useNavigate hook

  // Filtering logic
  const filteredLands = mockLands.filter(land => {
    let isLocationMatch = filters.location.city ? land.location.city === filters.location.city : true;
    let isSizeMatch = filters.size.length > 0 ? filters.size.some(size => land.size.includes(size)) : true;
    let isPriceMatch = true;
    // Implement price filtering logic
    // ...

    return isLocationMatch && isSizeMatch && isPriceMatch;
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleLandCardClick = (landId) => {
    navigate(`/indland/${landId}`); // Navigate to individual land page
  };

  return (
    <Container fluid className='mt-4'>
      <Row className='mt-2'>
        <Col xs={4} className='mb-2'>
          <h4 className="services-header" style={{ textAlign: 'left' }}>Agriland Exchange</h4>
        </Col>
        <Col xs={8}>
        </Col>
        <hr />
      </Row>
      <p>
            Discover your next agricultural opportunity at AgriLand Exchange. Whether you're looking to buy fertile farmland, rent a strategic plot for your next season, or invest in prime agricultural real estate, our platform connects you to a wide range of land options. Explore listings with detailed information on location, size, price, and unique land features. Each listing is an opportunity to expand your agricultural ventures or start anew in a location that meets your specific farming needs.
          </p>
      <hr></hr>
      <Row xs={1} md={3} className="g-4">
        {filteredLands.map((land, idx) => (
          <Col key={idx} onClick={() => handleLandCardClick(land.id)}>
            <Card className="h-100" style={{ backgroundColor: 'beige', textAlign: 'left', cursor: 'pointer' }}>
              <Card.Img variant="top" src={land.imageUrl} style={{ height: '200px', objectFit: 'cover' }} />
              <Card.Body style={{ minHeight: '150px' }}>
                <Card.Title>{land.name}</Card.Title>
                <medium className="text-muted">{land.location.city}, {land.location.country}</medium>
                <Card.Text>
                  {land.description}
                  <br />
                  <strong>Size: {land.size}</strong>
                  <br />
                  <strong>Price: {land.price}</strong>

                </Card.Text>
                {land.tags.map(tag => (
                  <Badge pill bg="secondary" className="me-1" key={tag}>
                    {tag}
                  </Badge>
                ))}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default LandCards;
