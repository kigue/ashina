import React, { useState } from 'react';
import { Modal, Button, Image, Form } from 'react-bootstrap';

function ProductModal({ product, show, onHide, onAddToCart }) {
    const [quantity, setQuantity] = useState(1); // State for tracking quantity

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    };

    const handleAddToCart = () => {
        onAddToCart({ ...product, quantity });
        setQuantity(1); // Reset quantity after adding to cart
    };

    return (
        <Modal show={show} onHide={onHide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>{product?.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="d-flex justify-content-center mb-4">
                    <Image src={product?.image} fluid style={{ maxHeight: '300px' }} />
                </div>
                <p>{product?.description}</p>
                <p><strong>Price:</strong> {product?.price}</p>
                <p><strong>Quality:</strong> {product?.quality || "Standard"}</p>

                <Form.Group controlId="productQuantity">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control as="select" value={quantity} onChange={handleQuantityChange}>
                        {[...Array(10).keys()].map(n => (
                            <option key={n + 1} value={n + 1}>{n + 1}</option>
                        ))}
                    </Form.Control>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Close</Button>
                <Button variant="primary" onClick={handleAddToCart}>Add to Cart</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ProductModal;
