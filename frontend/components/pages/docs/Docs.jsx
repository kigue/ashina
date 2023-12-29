import React, { useState } from 'react';
import { Container, Row, Col, Accordion, Card, ListGroup } from 'react-bootstrap';
import Navbar from '../home/navigation/Navbar.jsx';
import AboutAshina from '../docs/sections/Ashina/About.jsx'
import MembershipAshina from './sections/Ashina/Membership.jsx';
import FarmAshina from './sections/Ashina/Farms.jsx'

const DocumentationPage = () => {
    const [selectedSection, setSelectedSection] = useState('');

    const handleSelect = (section) => {
        setSelectedSection(section);
    };

    const renderContent = () => {
        switch (selectedSection) {
            case 'About':
                return <AboutAshina />;
            case 'Membership': return <MembershipAshina />; 
            case 'Farms': return <FarmAshina />; 
            default:
                return <p>Select a section to view its content.</p>;
        }
    };


    

    return (
        <>
            <Navbar style={{ backgroundColor: 'darkgreen' }} />
            <Container fluid style={{ marginTop: '', backgroundColor: 'green' }}>
                <Row>
                    <h4 className = 'mt-4' style={{textAlign: 'left'}}>Documentation</h4>
                    <hr></hr>
                    <Col md={3}>
                        <Accordion defaultActiveKey="0" className="custom-accordion" style={{ marginTop: '20px', marginBottom: '30px'}}>
                            <Accordion.Item eventKey="0" style={{backgroundColor: 'beige'}}>
                                <Accordion.Header>Ashina</Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup>
                                        <ListGroup.Item action onClick={() => handleSelect('About')}>
                                            About
                                        </ListGroup.Item>   
                                        <ListGroup.Item action onClick={() => handleSelect('Membership')}>
                                            Membership
                                        </ListGroup.Item>
                                        <ListGroup.Item action onClick={() => handleSelect('Farms')}>
                                            Farms
                                        </ListGroup.Item>
                                        <ListGroup.Item action onClick={() => handleSelect('Jobs')}>
                                            Jobs
                                        </ListGroup.Item>
                                        <ListGroup.Item action onClick={() => handleSelect('Payments')}>
                                            Payments
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Marketplace</Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup>
                                    <ListGroup.Item action onClick={() => handleSelect('Crop Pool')}>
                                            Shops
                                        </ListGroup.Item>
                                        <ListGroup.Item action onClick={() => handleSelect('Crop Pool')}>
                                            Crop Pool
                                        </ListGroup.Item>
                                        <ListGroup.Item action onClick={() => handleSelect('Inputs')}>
                                            Inputs
                                        </ListGroup.Item>
                                        <ListGroup.Item action onClick={() => handleSelect('Land & Invest')}>
                                            Land & Invest
                                        </ListGroup.Item>                                     
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Processing</Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup>
                                        <ListGroup.Item action onClick={() => handleSelect('Crop Pool')}>
                                            Crop Pool
                                        </ListGroup.Item>
                                        <ListGroup.Item action onClick={() => handleSelect('Inputs')}>
                                            Inputs
                                        </ListGroup.Item>
                                        <ListGroup.Item action onClick={() => handleSelect('Land & Invest')}>
                                            Land & Invest
                                        </ListGroup.Item>
                                        <ListGroup.Item action onClick={() => handleSelect('Resources')}>
                                            Resources
                                        </ListGroup.Item>
                                        <ListGroup.Item action onClick={() => handleSelect('Help Center')}>
                                            Help Center
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Governance</Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup style={{width: '100%'}}>
                                        <ListGroup.Item action onClick={() => handleSelect('Crop Pool')}>
                                            Proposals
                                        </ListGroup.Item>
                                        <ListGroup.Item action onClick={() => handleSelect('Inputs')}>
                                            Voting
                                        </ListGroup.Item>
                                        <ListGroup.Item action onClick={() => handleSelect('Land & Invest')}>
                                            Proposals
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Resources</Accordion.Header>
                                <Accordion.Body>
                                    <ListGroup style={{width: '100%'}}>
                                        <ListGroup.Item action onClick={() => handleSelect('Crop Pool')}>
                                            Forum
                                        </ListGroup.Item>
                                        <ListGroup.Item action onClick={() => handleSelect('Inputs')}>
                                            Blogs
                                        </ListGroup.Item>
                                        <ListGroup.Item action onClick={() => handleSelect('Land & Invest')}>
                                            Videos
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Accordion.Body>
                            </Accordion.Item>
                            {/* Repeat for other main sections */}
                        </Accordion>
                    </Col>

                    <Col md={9} style={{backgroundColor: ''}}>
                    {renderContent()}
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default DocumentationPage;
