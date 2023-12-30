import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Navbar from './navigation/Navbar.jsx'; // Adjust the import path as necessary
import mainpic from '../images/khaleelpic.jpg'

// Import images for team members and any additional styles or assets
import './Team.css'; // Make sure to create this CSS file for custom styling
import IconNav from './navigation/IconNav.jsx';

const TeamPage = () => {
    const teamMembers = [
        {
            name: 'Khaleel Igue',
            role: 'CEO & Founder',
            description: 'Khaleel Igue is an African Tech Entrepreneur who aims to leverage the power of blockchain and smart agriculture solutions to enhance productivity, ensure fair trade practices, and build a more equitable food system for those in need.',
            image: mainpic // replace with actual image paths
        },
        // ... other team members
    ];

    return (
        <>
        <Navbar />
        <Container fluid style={{backgroundColor: 'green'}}>
            <Row className="mb-5">
                <Col style={{marginTop: '20px'}}>
                    <h2 className="team-header">Meet Our Team</h2>
                    <p className="team-intro">Dedicated professionals working towards a sustainable agricultural future.</p>
                    <hr></hr>
                </Col>
            </Row>
            <Row>
                {teamMembers.map((member, idx) => (
                    <Col key={idx} md={4} sm={6} className="mb-3" style={{marginTop: '-50px'}}>
                        <Card className="team-card">
                            <Card.Img variant="top" src={member.image} />
                            <Card.Body>
                                <Card.Title>{member.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{member.role}</Card.Subtitle>
                                <Card.Text>{member.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            </Container>
        </>

    );
}

export default TeamPage;
