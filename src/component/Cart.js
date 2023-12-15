import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQty, decreaseQty, delCart } from '../reducx/action'; // Import các action tương ứng
import { Link } from 'react-router-dom';

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
        return parseFloat(cartItems.reduce((total, item) => total + item.qty * item.price, 0).toFixed(2));
    };

    const handleDelCart = (productId) => {
        dispatch(delCart(productId));
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
                <div>
                    <div className="row ">
                        <div className="col-sm-12 col-md-12 col-xs-12 w100 mb-2">
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
                                                <td>
                                                    <button
                                                        className="delete-cart"
                                                        onClick={() => handleDelCart(item.id)}
                                                    >
                                                        <i class="fa-solid fa-xmark"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row  information-cart">
                        <div className="col-12 col-md-5 col-lg-7 ">
                            <div className="size-box">
                                <h3>Order notes</h3>
                                <div className="checkout-note clearfix">
                                    <textarea id="note" name="note" rows="4" placeholder="Note"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-7 col-lg-5 ">
                            <div className="size-box-inner">
                                <div>
                                    <h3>Information line</h3>
                                </div>
                                <div>
                                    <p style={{ color: '#908F8F' }}>
                                        Total amount:{' '}
                                        <span style={{ fontSize: 24, color: '#333', fontWeight: 600 }}>
                                            ${calculateTotal()}
                                        </span>{' '}
                                    </p>
                                </div>
                                <div>
                                    <p style={{ fontSize: 14 }}>
                                        Shipping fee will be calculated at the checkout page.
                                        <br />
                                        You can also enter a discount code at the checkout page.
                                    </p>
                                </div>
                                <div>
                                    <a style={{ borderRadius: 30 }} className="btn btn-dark btncart-checkout">
                                        CHECKOUT
                                    </a>
                                    <p className="link-continue mt-2">
                                        <Link style={{ textDecoration: 'none', color: '#333' }} to="/products">
                                            <i className="fa fa-reply me-2"></i>
                                            Continue shopping
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
