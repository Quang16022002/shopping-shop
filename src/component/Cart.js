import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQty, decreaseQty } from '../reducx/action'; // Import các action tương ứng

const Cart = () => {
    const cartItems = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();

    const handleIncreaseQty = (productId) => {
        dispatch(increaseQty(productId));
    };

    const handleDecreaseQty = (productId) => {
        dispatch(decreaseQty(productId));
    };

    // Tính tổng số tiền
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.qty * item.price, 0).toFixed(2);
    };

    return (
        <div>
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                <img style={{ width: 200 }} src={item.image} alt={item.title}></img>
                                <p>
                                    {item.title} - Quantity: {item.qty}
                                </p>
                                <h4>${item.price}</h4>

                                <button onClick={() => handleIncreaseQty(item.id)}>+</button>
                                <button onClick={() => handleDecreaseQty(item.id)}>-</button>
                            </li>
                        ))}
                    </ul>
                    <p>Total: ${calculateTotal()}</p>
                </div>
            )}
        </div>
    );
};

export default Cart;
