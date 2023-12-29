// AboutAshina.jsx
import React from 'react';
import { Card } from 'react-bootstrap';

const AboutAshina = () => {
    return (
        <Card style={{ backgroundColor: 'beige', marginTop: '20px' }}>
            <Card.Body style={{textAlign: 'left'}}>
                <Card.Title>About Ashina</Card.Title>
                <Card.Text>
                    Ashina is an innovative platform aimed at revolutionizing the agricultural sector through the integration of blockchain technology. It focuses on empowering farmers, enhancing sustainable practices, and creating a more equitable and efficient ecosystem.
                    <br /><br />
                    At the heart of Ashina's mission is the empowerment of small-scale farmers by providing direct access to markets, financial inclusivity, and technological advancement. The platform operates on a decentralized governance model, allowing token holders to partake in decision-making processes.
                    <br /><br />
                    Ashina's unique features include a decentralized marketplace for agricultural products, crop pools for collaborative farming, and smart contract integration for transparent transactions. By prioritizing sustainable agricultural practices and community engagement, Ashina is not just an agricultural platform but a movement towards a more sustainable and equitable global food system.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default AboutAshina;
