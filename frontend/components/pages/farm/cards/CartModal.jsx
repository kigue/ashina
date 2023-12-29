import React from 'react';
import { Modal, Button, ListGroup, Form } from 'react-bootstrap';

function CartModal({ show, onHide, cart, setCart, onCheckout }) {
    const updateQuantity = (product, quantity) => {
        const updatedCart = cart.map(item => {
            if (item.name === product.name) {
                return { ...item, quantity: Number(quantity) };
            }
            return item;
        });
        setCart(updatedCart);
    };

    const removeFromCart = (product) => {
        const updatedCart = cart.filter(item => item.name !== product.name);
        setCart(updatedCart);
    };

    const calculateItemTotal = (price, quantity) => {
        return (parseFloat(price) * quantity).toFixed(2);
    };

    const calculateCartTotal = () => {
        return cart.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0).toFixed(2);
    };

    return (
        <Modal show={show} onHide={onHide} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Your Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ListGroup>
                    {cart.map((product, idx) => (
                        <ListGroup.Item key={idx}>
                            <div className="d-flex justify-content-between align-items-center">
                                <div>
                                    <p><a href={`/farms/${product.farmId}`}>{product.farmName}</a></p>
                                    <h5>{product.name}</h5>
                                    <p>Price: ${product.price} each</p>
                                    <p><b>Total:</b> ${calculateItemTotal(product.price, product.quantity)}</p>
                                </div>
                                <div>
                                    <Form.Control
                                        as="select"
                                        value={product.quantity}
                                        onChange={(e) => updateQuantity(product, e.target.value)}
                                        style={{ width: '80px', marginRight: '10px' }}
                                    >
                                        {[...Array(10).keys()].map(n => (
                                            <option key={n + 1} value={n + 1}>{n + 1}</option>
                                        ))}
                                    </Form.Control>
                                    <Button variant="danger" size="sm" onClick={() => removeFromCart(product)}>Remove</Button>
                                </div>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Modal.Body>
            <Modal.Footer>
                <div className="mr-auto">
                    <h5 style={{textAlign: 'left'}}>Total: ${calculateCartTotal()}</h5>
                </div>
                <Button variant="secondary" onClick={onHide}>Close</Button>
                <Button va  riant="primary" onClick={onCheckout}>Checkout</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CartModal;
