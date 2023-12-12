import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as apis from '../apis';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';

const Product = () => {
    const [products, setProducts] = useState();
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const productsData = await fetch(`https://fakestoreapi.com/products/${id}`);

                setProducts(await productsData.json());

                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false);
            }
        };

        fetchData();
        console.log(products);
    }, []);

    return (
        <div className="container mt-4">
            {loading ? (
                <div className="row d-flex">
                    <div className="col-md-6">
                        <Skeleton height={400} />
                    </div>
                    <div className="col-md-6 " style={{ lineHeight: 2 }}>
                        <Skeleton height={40} width={300} />
                        <Skeleton height={100} width={500} />
                        <Skeleton height={30} width={100} />
                        <Skeleton height={40} width={200} />
                        <Skeleton height={80} width={550} />
                        <div className="col d-flex">
                            <Skeleton height={40} width={150} />
                            <Skeleton height={40} width={150} style={{ marginLeft: 6 }} />
                        </div>
                    </div>
                </div>
            ) : (
                <div className="row ">
                    <div className="col-md-12 d-flex my-4">
                        <div className="col-md-6 ">
                            <img style={{ height: 400, width: 400 }} src={products.image}></img>
                        </div>
                        <div>
                            <h4 className="text-uppercase text-black-50">{products.category}</h4>
                            <h1 className="display-5">{products.title}</h1>
                            <p className="fw-bolder lead">
                                Rating {products.rating.rate}
                                <i className="fa-solid fa-star "></i>
                            </p>
                            <h3 className="display-6 fw-bolder ">${products.price}</h3>
                            <p className="lead">{products.description}</p>
                            <button className="btn btn-outline-dark shadow   rounded me-3 my-3">
                                <i className="fa-solid fa-cart-arrow-down me-2"></i>Add to cart
                            </button>
                            <button className="btn btn-dark shadow   ">Go to cart</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Product;
