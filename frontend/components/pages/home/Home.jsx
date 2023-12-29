import React from 'react';
import Navbar from './navigation/Navbar.jsx'; // Adjust the import path as necessary
import { Carousel, Container, Row, Col, Button, Card } from 'react-bootstrap';
import { FaStore, FaGift, FaSeedling, FaLandmark, FaTruckMoving, FaBookReader, FaUsers } from 'react-icons/fa';
import image1 from '../images/greenland.jpg'; // Adjust the path as necessary
import image2 from '../images/farm3.jpg';   // Adjust the path as necessary
import image3 from '../images/farm5.jpg';
import HomeCards from './HomeCards'; // Adjust the import path as necessary
import farmImage3 from '../images/farm3.jpg'; // Replace with actual image paths
import farmImage1 from '../images/farmImage2.jpg';


import './Home.css';
import '../home/navigation/MainNavbar.css';

const Home = () => {
    const navigateToRegistration = () => {
        console.log('Navigation to registration');
    };

    const carouselImageStyle = {
        height: '600px', // Set a fixed height for all images
        objectFit: 'cover', // This ensures the image covers the area properly
        width: '100%' // Ensures the image takes the full width of the carousel
    };

    const cardData = [
        {
            title: "Marketplace",
            description: "Ashina Marketplace is your one-stop agricultural hub. We facilitate direct farm sales, offer rental options, and introduce collaborative farming via Crop Pools. With a focus on sustainability and an integrated payment system, we're revolutionizing agriculture.",
            icon: <FaStore size={24} />
        },
        {
            title: "Token",
            description: "The Ashina Token is the digital currency of the platform and a testament to one's contribution and commitment to the ecosystem. Earn, stake, and spend these tokens across the platform, from availing services to participating in exclusive events.",
            icon: <FaGift size={24} />
        },
        {
            title: "Crop Pools",
            description: "Join the Crop Pools to collectively grow and share agricultural produce. This community-driven approach allows farmers to pool resources, share risks, and enjoy the benefits of large-scale farming, even on small plots of land.",
            icon: <FaSeedling size={24} /> // Assuming FaSeedling is the relevant icon from FontAwesome or similar
        },
        {
            title: "Land & Invest",
            description: "Explore opportunities in agricultural real estate with Land & Invest. Secure a piece of fertile land or invest in promising farming ventures. It's a chance to contribute to sustainable agriculture while reaping potential financial benefits.",
            icon: <FaLandmark size={24} /> // Assuming FaLandmark is the relevant icon from FontAwesome or similar
        }
        // ... other card data
    ];

    const memberData = [
        {
            title: "Farmers",
            description: "Farmers are the core of our agricultural ecosystem. They implement sustainable farming practices, leverage technology for efficient crop management, and contribute significantly to the global food supply. Our platform supports them with resources, networking, and access to markets.",
            icon: <FaSeedling size={24} />
        },
        {
            title: "Knowledge Hub",
            description: "The Knowledge Hub is a collective of Agronomists, Bloggers, and Subject Matter Experts who provide valuable insights into modern farming techniques, sustainable practices, and innovative solutions in agriculture. Their contributions in research, articles, and advisory play a pivotal role in educating and informing our community.",
            icon: <FaBookReader size={24} />
        },
        {
            title: "Partners",
            description: "Our Partners showcase a network of third-party services crucial to the agricultural supply chain, including Transportation providers ensuring timely delivery of goods, Storage facilities maintaining the quality and safety of produce, and various strategic partnerships that enhance the overall efficiency and reach of our platform.",
            icon: <FaTruckMoving size={24} />
        },
        {
            title: "Consumers",
            description: "Consumers are an integral part of our platform. They are individuals and businesses seeking high-quality, sustainable produce. Through Ashina, consumers connect directly with farmers, gain access to fresh, locally sourced foods, and contribute to a more sustainable food system.",
            icon: <FaUsers size={24} />
        }
        // ... add more categories as needed
    ];

    return (
        <>
            <Navbar />
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block"
                        src={farmImage1} // Adjust path as necessary
                        alt="First slide"
                        style={carouselImageStyle}
                    />  

                    <Carousel.Caption style={{marginBottom: '235px', color: 'beige'}}>
                        <h3>Discover the Future of Farming with Ashina</h3>
                        <p>Register, buy, or rent tokenized farmland from anywhere around the world to begin your journey.</p>
                        <Button style= {{marginTop: '15px'}} variant="primary">Read Docs</Button>
                        <Button style= {{marginTop: '15px'}}  variant="secondary" className="ms-2">Register Now</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                 <img
                        className="d-block"
                        src={farmImage3}
                        alt="Our Members"
                        style={carouselImageStyle}
                    />
                <div className="carousel-caption-container">
                    <div className="marketplace-header">
                        <h2>Our Members</h2>
                    </div>
                    <div className="overlay-cards-container">
                        <Row xs={1} md={2} className="g-4">
                            {memberData.map((card, idx) => (
                                <Col key={idx}>
                                    <Card style={{ backgroundColor: 'beige'}}>
                                        <Card.Body>
                                            <Card.Title style={{ textAlign: 'left', display: 'flex', alignItems: 'center' }}>
                                                {card.icon}
                                                <span style={{ marginLeft: '10px' }}>{card.title}</span>
                                            </Card.Title>
                                            <Card.Text style={{ textAlign: 'left' }}>
                                                {card.description}
                                            </Card.Text>
                                            <Button variant="primary" style={{ float: 'right', backgroundColor: 'darkgreen' }}>Learn More</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                 <img
                        className="d-block"
                        src={image3}
                        alt="Ashina Marketplace"
                        style={carouselImageStyle}
                    />
                <div className="carousel-caption-container">
                    <div className="marketplace-header">
                        <h2>Ashina Marketplace</h2>
                    </div>
                    <div className="overlay-cards-container">
                        <Row xs={1} md={2} className="g-4">
                            {cardData.map((card, idx) => (
                                <Col key={idx}>
                                    <Card style={{ backgroundColor: 'beige'}}>
                                        <Card.Body>
                                            <Card.Title style={{ textAlign: 'left', display: 'flex', alignItems: 'center' }}>
                                                {card.icon}
                                                <span style={{ marginLeft: '10px' }}>{card.title}</span>
                                            </Card.Title>
                                            <Card.Text style={{ textAlign: 'left' }}>
                                                {card.description}
                                            </Card.Text>
                                            <Button variant="primary" style={{ float: 'right', backgroundColor: 'darkgreen' }}>Learn More</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>
            </Carousel.Item>              
            </Carousel>
            <HomeCards />


        </>
    );
}

export default Home;
