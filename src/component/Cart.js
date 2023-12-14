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

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.qty * item.price, 0).toFixed(2);
    };

    return (
        <div className="container ">
            <div className="hedding-cart">
                <h1>YOUR CART</h1>
                <p>There are {cartItems.length} products in the cart</p>
                <div className="hr"></div>
            </div>

            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-xs-12 w100">
                        <div className="table-cart">
                            <table className="table-cart table ">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th> Product's name </th>
                                        <th>Price</th>
                                        <th style={{ paddingLeft: 22 }}>Quantity</th>
                                        <th>Money</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((item) => (
                                        <tr key={item.id}>
                                            <td style={{ width: 100 }}>
                                                <img
                                                    style={{ width: 70, height: 70 }}
                                                    src={item.image}
                                                    alt={item.title}
                                                />
                                            </td>
                                            <td style={{ width: 400, fontSize: 15 }}>{item.title} </td>
                                            <td style={{ fontSize: 20, fontWeight: 500 }}>${item.price}</td>
                                            <td>
                                                <div className=" quantity d-flex">
                                                    <button onClick={() => handleDecreaseQty(item.id)}>-</button>
                                                    <span>{item.qty}</span>
                                                    <button onClick={() => handleIncreaseQty(item.id)}>+</button>
                                                </div>
                                            </td>
                                            <td style={{ fontSize: 20, fontWeight: 500 }}>
                                                ${(item.qty * item.price).toFixed(2)}
                                            </td>
                                            <td>x</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
