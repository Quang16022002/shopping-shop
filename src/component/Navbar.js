import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Navbar = () => {
    const state = useSelector((state) => state.handleCart);
    console.log(state);
    return (
        <nav className="navbar navbar-expand-lg shadow p-3 px-5   bg-white rounded py-3 ">
            <div className="container-fluid ">
                <Link className="navbar-brand " to="/">
                    <img src="https://elise.vn/media/logo/default/logo_color.png"></img>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbare  collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">
                                HOME
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Products">
                                PRODUCTS
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="about">
                                ABOUT
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="blog">
                                BLOG
                            </Link>
                        </li>
                    </ul>
                    <div className="buttons  d-flex  flex-right">
                        <div className="search-nav">
                            <span className="me-2">SEARCH</span>
                            <input type="text" className="me-2"></input>
                            <i className="fa-solid fa-magnifying-glass "></i>
                        </div>

                        <a href="">
                            <i className="fa-regular fa-user me-4"></i>
                        </a>
                        <Link className="me-4" to="/cart" href="">
                            <i style={{ position: 'relative' }} className="fa-solid fa-cart-plus"></i>
                            <span className="qlt-item">{state.length}</span>
                        </Link>
                        <a href="">
                            {' '}
                            <i style={{ position: 'relative' }} className="fa-regular fa-heart "></i>
                            <span className="qlt-item">0</span>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
