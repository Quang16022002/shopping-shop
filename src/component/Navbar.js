import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg shadow p-3  bg-white rounded py-3 ">
            <div className="container-fluid">
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
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Products">
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="about">
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="contact">
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <div className="buttons">
                        <a href="" className="btn btn-outline-dark">
                            <i className="fa-solid fa-right-to-bracket me-2"></i>Login
                        </a>

                        <a href="" className="btn btn-outline-dark ms-2">
                            <i className="fa-solid fa-right-to-bracket me-2"></i>Register
                        </a>
                        <a href="" className="btn btn-outline-dark ms-2">
                            <i className="fa-solid fa-cart-arrow-down me-2"></i>Carts(0)
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
