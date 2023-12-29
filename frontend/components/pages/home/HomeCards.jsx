import React from 'react';
import { Card, Col, Row, Container, Carousel, Badge, Button, ProgressBar, OverlayTrigger, Tooltip, ListGroup } from 'react-bootstrap';
import { BsFillPersonFill, BsCalendar, BsPerson, BsInfoCircle } from 'react-icons/bs';
import farmImage1 from '../images/farm1.jpg'; // Replace with actual image paths
import farmImage2 from '../images/farm2.jpg';
import farmImage3 from '../images/farm3.jpg';
import farmImage4 from '../images/farm4.jpg';
import farmImage5 from '../images/farm5.jpg'
import seed1 from '../images/seed1.jpeg'
import seed2 from '../images/seed2.jpeg'
import seed3 from '../images/seed3.jpeg'

const cardStyle = {
  backgroundColor: 'beige',
  textAlign: 'left'
};

const imageContainerStyle = {
  paddingTop: '56.25%', // For 16:9 aspect ratio
  position: 'relative'
};

const imageStyle = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover'
};

const CropPoolRow = ({ cropPools }) => (
  <Row xs={1} md={3} className="g-4 mb-5">
    {cropPools.map((cropPool, idx) => (
      <Col key={idx}>
        <Card style={{backgroundColor: 'beige'}}>
          <Card.Body>
            <Card.Title>{cropPool.cropType} Pool</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{cropPool.location}</Card.Subtitle>
            <ListGroup variant="flush">
              <ListGroup.Item ><BsFillPersonFill /> Contributors: {cropPool.currentContributors}</ListGroup.Item>
              <ListGroup.Item><BsCalendar /> Deadline: {cropPool.deadline}</ListGroup.Item>
              <ListGroup.Item><BsPerson /> Proposed by: {cropPool.proposer}</ListGroup.Item>
              <ListGroup.Item>Quality: {cropPool.qualityStandards}</ListGroup.Item>
              <ListGroup.Item>Requirements: {cropPool.requirements}</ListGroup.Item>
            </ListGroup>
            <ProgressBar now={cropPool.progress} label={`${cropPool.progress}%`} className="my-3" variant="success" />
            <Button variant="primary">Join Pool</Button>
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip id={`tooltip-${idx}`}>Click for more info about this pool</Tooltip>}
            >
              <Button variant="secondary" className="ms-2"><BsInfoCircle /> More Info</Button>
            </OverlayTrigger>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
);

const DonationCropPoolRow = ({ donationCropPools }) => (
  <Row xs={1} md={2} className="g-4 mb-5">
    {donationCropPools.map((pool, idx) => (
      <Col key={idx}>
        <Card className="shadow-sm" style={{backgroundColor: 'beige'}}>
          <Card.Body>
            <Card.Title>{pool.cropType} Donation Pool</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{pool.location}</Card.Subtitle>
            <ListGroup variant="flush">
              {/* List group items similar to CropPoolRow */}
            </ListGroup>
            <ProgressBar now={pool.progress} label={`${pool.progress}%`} className="my-3" variant="success" />
            <Button variant="primary">Contribute</Button>
            {/* Additional buttons or info as needed */}
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
);

const FarmerStoryRow = ({ stories }) => (
  <Row xs={1} md={3} className="g-4">
    {stories.map((story, idx) => (
      <Col key={idx}>
        <Card style={cardStyle}>
        <div style={imageContainerStyle}>
        <Card.Img variant="top" src={story.imageUrl} style={imageStyle} />
        </div>
          <Card.Body>
            <Card.Title>{story.name}</Card.Title>
            <medium className="text-muted">{story.farmName}</medium>
            <Card.Text>
              {story.story}
            </Card.Text>
            <Button variant="primary">Read More</Button> {/* Added Read More button */}
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
);

const SeedsRow = ({ seeds }) => (
  <Row xs={1} md={3} className="g-4 mb-5">
    {seeds.map((seed, idx) => (
      <Col key={idx}>
        <Card style={{ width: '90%', backgroundColor: 'beige', textAlign: '' }}>
          <Card.Img variant="top" src={seed.imageUrl} style={{ height: '200px' }} />
          <Card.Body>
            <Card.Title>{seed.name}</Card.Title>
            <Card.Text>
              {seed.description}
            </Card.Text>
            <Button variant="primary">Read More</Button> {/* Added Read More button */}
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
);

function HomeCards() {

  const donationCropPools = [
    {
      cropType: 'Vegetables for Schools',
      location: 'Springfield, USA',
      // ... other properties
    },
    {
      cropType: 'Fruits for Shelters',
      location: 'Rivertown, USA',
      // ... other properties
    },
    // ... more donation crop pools
  ];


  const featuredFarms = [
    {
      name: "Green Valley Farms",
      description: "Green Valley Farms specializes in organic vegetables and free-range poultry.",
      imageUrl: farmImage1,
      location: "Napa Valley, CA",
      tags: ["Organic", "Poultry"]
    },
    {
      name: "Blue Sky Orchards",
      description: "Famous for apple and peach orchards with sustainable farming methods.",
      imageUrl: farmImage2,
      location: "Boulder, CO",
      tags: ["Fruits", "Sustainable"]
    },

    {
      name: "Jamie's farm",
      description: "Famous for apple and peach orchards with sustainable farming methods.",
      imageUrl: farmImage4,
      location: "Boulder, CO",
      tags: ["Fruits", "Sustainable"]
    },
  
  ];


  const cropPools = [
    {
      cropType: 'Tomatoes',
      location: 'Nairobi, Kenya',
      currentContributors: '15',
      deadline: '2023-11-30',
      proposer: 'John Doe',
      qualityStandards: 'Grade A, No Pesticides',
      requirements: 'Sandy Loam Soil, Minimal Watering',
      progress: 75
      // Add other properties as needed
    },
    {
      cropType: 'Potatoes',
      location: 'Chicago, IL',
      currentContributors: '10',
      deadline: '2023-11-30',
      proposer: 'John Doe',
      qualityStandards: 'Grade A, No Pesticides',
      requirements: 'Sandy Loam Soil, Minimal Watering',
      progress: 20
      // Add other properties as needed
    },
    {
      cropType: 'Onions',
      location: 'Manchester, UK',
      currentContributors: '5',
      deadline: '2023-11-30',
      proposer: 'John Doe',
      qualityStandards: 'Grade A, No Pesticides',
      requirements: 'Sandy Loam Soil, Minimal Watering',
      progress: 60
      // Add other properties as needed
    },
    // Add more crop pool objects
  ];

  const seedsForTheSeason = [
    {
      name: "Rainbow Carrot Mix",
      description: "A colorful blend of heirloom carrot seeds perfect for spring planting.",
      imageUrl: seed1,
      tags: ["Carrots", "Heirloom"]
    },
    {
      name: "Summer Squash Seeds",
      description: "High-yield squash seeds suitable for summer planting.",
      imageUrl: seed2,
      tags: ["Squash", "High Yield"]
    },
    {
      name: "Saffron Seeds",
      description: "High-yield saffron seeds suitable for dry climates.",
      imageUrl: seed3,
      tags: ["Saffron", "High Yield"]
    },
    // ... other seeds for the season
  ];

  const farmerStories = [
    {
      name: "John Doe",
      story: "John has been a pioneer in organic farming techniques...",
      imageUrl: farmImage1,
      farmName: "Doe Organic Farms"
      // ... other details
    },
    {
      name: "Jane Smith",
      story: "Jane is known for her innovative approaches to sustainable farming...",
      imageUrl: farmImage2, // replace with actual image path
      farmName: "Smith Sustainable Farms"
    },

    {
      name: "Jake Patton",
      story: "Jake is known for his tangible impact on the African Continent with new agritech solutions.",
      imageUrl: farmImage4, // replace with actual image path
      farmName: "Patton Farms"
    },
  ];


  return (
    
    <Container fluid className='' style={{backgroundColor: 'green', color: 'black'}}>

      <SectionWithDescription 
        title="Featured Farms"
        description="Explore our curated selection of farms known for their sustainable and quality produce."
        items={featuredFarms}
      />

<SectionWithDescription 
        title="Crop Pools"
        description="Participate in our latest crop pools to collaborate and maximize yields."
        items={cropPools}
        isCropPool={true}
      />

    <SectionWithDescription 
        title="Seeds for the Season"
        description="Discover the best seeds..."
        items={seedsForTheSeason}
        customRowComponent={<SeedsRow seeds={seedsForTheSeason} />}
      />

      <SectionWithDescription 
        title="Farmer Stories"
        description="Meet the people behind your food..."
        items={farmerStories}
        customRowComponent={<FarmerStoryRow stories={farmerStories} />}
      />
      


      {/* Additional sections like Weekly Specials, Educational Content, Event Announcements, etc. */}
    </Container>
  );
}

const donationCropPools = [
  {
    cropType: 'Vegetables for Schools',
    location: 'Springfield, USA',
    // ... other properties
  },
  {
    cropType: 'Fruits for Shelters',
    location: 'Rivertown, USA',
    // ... other properties
  },
  {
    cropType: 'Fruits for Shelters',
    location: 'Rivertown, USA',
    // ... other properties
  },
  // ... more donation crop pools
];


const SectionWithDescription = ({ title, description, items, customRowComponent, isCropPool }) => (
  <>
    <Row>
      <Col xs={12} style={{textAlign: 'left', marginTop: '10px'}}>
        <h4 className="services-header" style={{ textAlign: 'left', margin: '10px 0' }}>{title}</h4>
        <p>{description}</p>
        <hr />
      </Col>
    </Row>
    {customRowComponent || (isCropPool ? <CropPoolRow cropPools={items} /> : <FarmRow farms={items} />)}
  </>
);

const FarmRow = ({ farms }) => (
  <Row xs={1} md={3} className="g-4 mb-5">
    {farms.map((farm, idx) => (
      <Col key={idx}>
        <Card style={{ width: '370px', backgroundColor: 'beige', textAlign: 'left' }}>
          <Card.Img variant="top" src={farm.imageUrl} style={{ height: '200px' }} />
          <Card.Body>
            <Card.Title>{farm.name}</Card.Title>
            <medium className="text-muted">{farm.location}</medium>
            <Card.Text>
              {farm.description}
              <br />
            </Card.Text>
            {farm.tags && farm.tags.map(tag => (
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
);


export default HomeCards;