import React, { useState } from 'react';
import { Card, Col, Row, Container, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Import if using React Router
import SubNav from '../../marketplace/navigation/SubNav';
import InputShopImage1 from "../images/seed1.jpg";
import InputShopImage2 from "../images/seed2.jpg";
import InputShopImage3 from "../images/seed3.jpg";
import InputShopImage4 from "../images/seed4.jpg";
import InputShopImage5 from "../images/seed5.jpg";
import InputShopImage6 from "../images/fert1.jpg";

function InputsCards() {
  const [filters, setFilters] = useState({
    location: { city: '' },
    itemType: [],
    quality: {}
  });

  // Mock Input shops data
  const mockInputShops = [
    {
      id: "input1",
      name: "Green Seed Co.",
      description: "High-quality seeds for various crops, including drought-resistant varieties.",
      imageUrl: InputShopImage1,
      location: { country: 'USA', city: 'Iowa' },
      tags: ["Seeds", "Non-GMO", "Organic"]
    },
    {
      id: "input2",
      name: "Blue Sky Fertilizers",
      description: "Eco-friendly and efficient fertilizers to boost your crop yield.",
      imageUrl: InputShopImage6,
      location: { country: 'Canada', city: 'Alberta' },
      tags: ["Fertilizers", "Organic", "Eco-Friendly"]
    },
    {
      id: "input3",
      name: "RapidGrow Pesticides",
      description: "Safe and effective pesticides to protect your crops from pests.",
      imageUrl: InputShopImage3,
      location: { country: 'UK', city: 'London' },
      tags: ["Pesticides", "Eco-Friendly", "Pet-Safe"]
    },
    {
      id: "input4",
      name: "FarmTech Machinery",
      description: "Advanced farming machinery to modernize and streamline your farming operations.",
      imageUrl: InputShopImage4,
      location: { country: 'Germany', city: 'Berlin' },
      tags: ["Machinery", "High-Tech", "Efficient"]
    },
    {
      id: "input5",
      name: "HydroPro Irrigation Systems",
      description: "Innovative irrigation solutions for efficient water management.",
      imageUrl: InputShopImage5,
      location: { country: 'Australia', city: 'Sydney' },
      tags: ["Irrigation", "Water-Saving", "Advanced Tech"]
    },
    {
      id: "input6",
      name: "Natural Compost Co.",
      description: "Organic compost for enriching soil fertility.",
      imageUrl: InputShopImage2,
      location: { country: 'India', city: 'Pune' },
      tags: ["Compost", "Organic", "Soil Health"]
    }
  ];
  

  const navigate = useNavigate(); // Initialize the navigate function using the useNavigate hook


  // Filtering logic
  const filteredInputShops = mockInputShops.filter(shop => {
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

  const handleInputCardClick = (InputId) => {
    navigate(`/indInput/${InputId}`); // Navigate to individual Input page
  };

  return (
    <Container fluid className='mt-4'>
      <Row className='mt-3'>
        <Col xs={2}>
          <h4 className="services-header" style={{ textAlign: 'left' }}>Inputs Shops</h4>
        </Col>
        <Col xs={8}>
          <SubNav onFilterChange={handleFilterChange} filters={filters} />
        </Col>
      </Row>
      <hr />
      <Row xs={1} md={3} className="g-4"> {/* Adjusted for consistent width in grid */}
      {filteredInputShops.map((shop, idx) => (
        <Col key={idx} onClick={() => handleInputCardClick(shop.id)}>
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

export default InputsCards;
