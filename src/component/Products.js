import React, { useEffect, useState } from 'react';
import * as apis from '../apis';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Link, NavLink, useLocation } from 'react-router-dom';
const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    const isHomePage = location.pathname === '/';
    useEffect(() => {
        const fetchData = async () => {
            try {
                const productsData = await apis.getProducts();

                setProducts(productsData);

                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container mt-4">
            {loading ? (
                <div className="container d-flex ">
                    <div className="col-md-3 ms-4 ">
                        <Skeleton height={500} />
                    </div>
                    <div className="col-md-3 ms-4">
                        <Skeleton height={500} />
                    </div>
                    <div className="col-md-3 ms-4">
                        <Skeleton height={500} />
                    </div>
                    <div className="col-md-3 ms-4">
                        <Skeleton height={500} />
                    </div>
                </div>
            ) : (
                <div className="row">
                    <h3 className="text-center">NEW ARRIVAL</h3>
                    <div className="  d-flex justify-content-center mb-8 mt-3">
                        <button type="button" className="btn btn-outline-dark  ">
                            All
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-dark ms-2"
                            // onClick={() => filterProduct(" Men's colothing")}
                        >
                            Men's colothing
                        </button>
                        <button type="button" className="btn btn-outline-dark ms-2">
                            Women's colothing
                        </button>
                        <button type="button" className="btn btn-outline-dark ms-2">
                            Jewelery
                        </button>
                        <button type="button" className="btn btn-outline-dark ms-2">
                            Electronic
                        </button>
                    </div>

                    {products.map((product, index) => (
                        <div key={product.id} className=" col-md-3 mb-3 mt-3  ">
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to={isHomePage ? `products/${product.id}` : `${product.id}`}
                            >
                                <div className="a card h-100 text-center item-center py-4">
                                    <img src={product.image} className="card-img-top " alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title.substring(0, 20)}...</h5>
                                        <p className="card-text">${product.price}</p>
                                        <p className="card-text">
                                            rate: {product.rating.rate}
                                            <i className="fa-solid fa-star "></i>
                                        </p>

                                        <Link
                                            to={isHomePage ? `products/${product.id}` : `${product.id}`}
                                            className="btn btn-outline-dark shadow   rounded"
                                        >
                                            Buy now
                                        </Link>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Products;
