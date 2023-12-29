// MembershipPage.js
import React from 'react';
import { Container, Card } from 'react-bootstrap';

const MembershipPage = () => {
    return (
        <Container style={{ marginTop: '20px' }}>
            <Card>
                <Card.Body style={{textAlign: 'left'}}>
                    <Card.Title >Empowering Our Members to Cultivate Change</Card.Title>
                    <Card.Text>
                        Ashina's strength lies in its diverse and dynamic community. Each member brings unique skills, perspectives, and experiences, contributing to a collective mission of transforming agriculture through technology and sustainable practices. Our members are not just participants; they are change-makers, innovators, and the driving force behind a more equitable and sustainable agricultural future.
                    </Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Roles and Contributions:</Card.Subtitle>
                    <Card.Text>
                        <strong>Farmers and Producers:</strong>
                        <ul>
                            <li>Directly influence the platform's evolution to meet real-world agricultural needs.</li>
                            <li>By adopting and providing feedback on Ashina’s solutions, farmers and producers help tailor the platform to effectively address the challenges faced in modern agriculture.</li>
                        </ul>
                        {/* ... Add other roles like Tech Enthusiasts, Sustainability Advocates, etc. ... */}
                    </Card.Text>
                    <Card.Text>
                        At Ashina, we believe that every member has the potential to contribute significantly to our vision. Together, we are not just building a platform; we are cultivating a movement towards a more innovative, sustainable, and equitable agricultural future. Your participation in Ashina is an opportunity to make a real difference, shaping the future of agriculture for generations to come.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default MembershipPage;
