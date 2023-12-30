import React, { useState } from 'react';
import { Container, Row, Col, Tabs, Tab, Card, Carousel, ProgressBar, ListGroup, Badge, Button } from 'react-bootstrap';
import ProductModal from './ProductModal.jsx'; // Import the ProductModal component
import { BsCart } from 'react-icons/bs';
import CartModal from './CartModal';

// Import your images here
import farmShopImage1 from "../../images/farm1.jpg"
import farmShopImage2 from "../../images/farm1.jpg"
import farmShopImage3 from "../../images/farm1.jpg"
import farmShopImage4 from "../../images/farm1.jpg"
import Tomatoes from "../../images/tomatoes.jpg";
import farmShopImage5 from "../../images/farm1.jpg"

function IndividualFarmCards({ farmId }) {
    const [showCartModal, setShowCartModal] = useState(false);
    const [cart, setCart] = useState([]);
    const [showProductModal, setShowProductModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    // Mock data for demonstration
        const allFarmData = [
            {
              id: 'farm1',
              name: "Sunnydale Organic Farm",
              location: "Springfield, IL",
              about: "Sunnydale Farm specializes in organic produce and sustainable farming practices. We've been a family-owned farm for over 50 years, committed to providing fresh, high-quality products.",
              images: [farmShopImage1, farmShopImage2, farmShopImage3],
              products: [
                {
                    name: "Organic Tomatoes",
                    price: "3.99 per lb",
                    availability: "In Stock",
                    tags: ["Organic", "Fresh"],
                    image: Tomatoes,
                    description: "Freshly picked, sun-ripened organic tomatoes grown with sustainable farming practices. Perfect for salads, sauces, and soups to add a burst of natural flavor.",
                    quality: "High" // Example quality attribute
                    // ... other attributes ...
                },
                {
                    name: "Red Tomatoes",
                    price: "1.99 per lb",
                    availability: "In Stock",
                    tags: ["Fresh"],
                    image: Tomatoes,
                    description: "Freshly picked, sun-ripened organic tomatoes grown with sustainable farming practices. Perfect for salads, sauces, and soups to add a burst of natural flavor.",
                    quality: "High" // Example quality attribute
                    // ... other attributes ...
                },
                // ... other products ...
            ],
              reviews: [
                { user: "John Doe", rating: 4, comment: "Great quality produce!", date: "2021-06-15" },
                // ... other reviews ...
              ],
              about: "Green Valley Orchards has been a family-run farm for over three generations, specializing in organic apples and cherries. Our commitment to sustainable farming and community engagement has been the cornerstone of our growth.",
              sustainability: "We employ rainwater harvesting, crop rotation, and natural pest control methods to reduce our environmental impact and maintain a healthy ecosystem on our farm.",
              team: [
                { name: "John Smith", role: "Founder & Head Farmer", image: "path/to/john.jpg" },
                { name: "Sarah Johnson", role: "Agronomist", image: "path/to/sarah.jpg" },
                // More team members...
              ],
              contactInfo: {
                phone: "123-456-7890",
                email: "contact@sunnydalefarms.com",
                address: "123 Farm Lane, Springfield, IL"
              },
              gallery: [
                { image: farmShopImage1, caption: "Harvesting Season 2021" },
                // ... other gallery images ...
              ],
              events: [
                { title: "Farmers Market", date: "2023-07-20", description: "Join us at our annual farmers market event. Fresh produce, local crafts, and more!" },
                // ... other events ...
              ],
              blog: [
                { title: "Sustainable Farming Practices", date: "2023-01-10", excerpt: "Discover how we maintain sustainability on our farm..." },
                // ... other blog posts ...
              ]
            },
          ];   

    const farmData = allFarmData.find(farm => farm.id === farmId) || allFarmData[0];

    const handleCheckout = () => {
        console.log("Proceeding to checkout with items:", cart);
        setShowCartModal(false);
    };

    const openProductModal = (product) => {
        setSelectedProduct(product);
        setShowProductModal(true);
    };

    const addToCart = (product) => {
        const cartItem = {
            ...product,
            farmId: farmData.id,
            farmName: farmData.name
        };
        setCart([...cart, cartItem]);
        setShowProductModal(false);
    };

    const calculateAverageRating = (reviews) => {
        const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
        return (totalRating / reviews.length).toFixed(1);
    };

    const averageRating = calculateAverageRating(farmData.reviews);

    return (
        <Container fluid className='mb-3'>
            {/* Farm Details */}
            <Row style={{ marginTop: '30px' }}>
                <Col xs={11}>
                    <h2 style={{ textAlign: 'left', fontSize: '25px' }}>{farmData.name}</h2>
                </Col>
                <Col xs={1} style={{ textAlign: 'right' }}>
                    <BsCart onClick={() => setShowCartModal(true)} />
                    <Badge pill bg="secondary">{cart.length}</Badge>
                </Col>
            </Row>
            <hr/>
            <Tabs defaultActiveKey="home" id="farm-details-tab" className="mb-3" fill>
                {/* Home Tab */}
                <Tab eventKey="home" title="Home">
                    <Row>
                        <Col md={6}>
                            <Carousel>
                                {farmData.images.map((img, idx) => (
                                    <Carousel.Item key={idx}>
                                        <img className="d-block w-100" src={img} alt={`Slide ${idx}`} />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </Col>
                        <Col md={6}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>About Us</Card.Title>
                                    <Card.Text>{farmData.about}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Sustainability Practices</Card.Title>
                                    <Card.Text>{farmData.sustainability}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row xs={1} md={3} className="g-4">
                        {farmData.team.map((member, idx) => (
                            <Col key={idx}>
                                <Card>
                                    <Card.Img variant="top" src={member.image} style={{ height: '200px', objectFit: 'cover' }} />
                                    <Card.Body>
                                        <Card.Title>{member.name}</Card.Title>
                                        <Card.Text>{member.role}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    {/* Additional content such as videos or links to more details can be added here */}
                </Tab>

                {/* Products Tab */}
                <Tab eventKey="products" title="Products">
                <Row xs={1} md={3} className="g-4">
                    {farmData.products.map((product, idx) => (
                        <Col key={idx} onClick={() => openProductModal(product)}>
                            <Card className="h-100 product-card">
                                <Card.Img variant="top" src={product.image} style={{ height: '200px', objectFit: 'cover' }} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <Card.Text className="text-muted">
                                        {product.price} <br />
                                        <Badge bg="success">{product.availability}</Badge>
                                    </Card.Text>
                                    <Button variant="primary" size="sm" onClick={() => addToCart(product)}>
                                        <BsCart /> Add to Cart
                                    </Button>
                                </Card.Body>
                                <Card.Footer>
                                    {product.tags.map(tag => (
                                        <Badge key={tag} bg="secondary" className="me-1">{tag}</Badge>
                                    ))}
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Tab>

                {/* Reviews Tab */}
                <Tab eventKey="reviews" title="Reviews">
                    <Row>
                        <Col md={4}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Average Rating</Card.Title>
                                    <h2>{averageRating} out of 5</h2>
                                    <ProgressBar now={(averageRating / 5) * 100} />
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={8}>
                            <ListGroup>
                                {farmData.reviews.map((review, idx) => (
                                    <ListGroup.Item key={idx}>
                                        <strong>{review.user}</strong>
                                        <span className="text-muted ml-2">- {review.rating} stars</span>
                                        <p>{review.comment}</p>
                                        {/* Customer images if available */}
                                        {/* review.images.map(image => <img src={image} alt="Review" />) */}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Col>
                    </Row>
                </Tab>

                {/* Contact Tab */}
                <Tab eventKey="contact" title="Contact">
                    <Card>
                        <Card.Body>
                            <Card.Title>Contact Information</Card.Title>
                            <Card.Text>
                                <strong>Phone:</strong> {farmData.contactInfo.phone} <br />
                                <strong>Email:</strong> {farmData.contactInfo.email} <br />
                                <strong>Address:</strong> {farmData.contactInfo.address}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Tab>
            </Tabs>

            {/* Product Modal */}
            {selectedProduct && (
                <ProductModal 
                    product={selectedProduct} 
                    show={showProductModal} 
                    onHide={() => setShowProductModal(false)} 
                    onAddToCart={addToCart} 
                />
            )}

            {/* Cart Modal */}
            <CartModal
                show={showCartModal}
                onHide={() => setShowCartModal(false)}
                cart={cart}
                setCart={setCart}
                onCheckout={handleCheckout}
                farmName={farmData.name}
                farmId={farmData.id}
            />
        </Container>
    );
}

export default IndividualFarmCards;


