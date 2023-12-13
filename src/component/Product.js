import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as apis from '../apis';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';
import { useSelector, useDispatch } from 'react-redux';
import { addCart } from '../reducx/action';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
const Product = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const dispatch = useDispatch();
    const addProduct = (product) => {
        dispatch(addCart(product));
        notify(product.title);
    };

    const notify = (productName) => {
        toast.success(`${productName} has been added to your cart!`, {
            position: 'bottom-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productData = await apis.getProduct(id);
                setProduct(productData);
                setLoading(false);
            } catch (error) {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

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
                            <img style={{ height: 400, width: 400 }} src={product.image}></img>
                        </div>
                        <div>
                            <h4 className="text-uppercase text-black-50">{product.category}</h4>
                            <h1 className="display-5">{product.title}</h1>
                            <p className="fw-bolder lead">
                                Rating {product.rating.rate}
                                <i className="fa-solid fa-star "></i>
                            </p>
                            <h3 className="display-6 fw-bolder ">${product.price}</h3>
                            <p className="lead">{product.description}</p>
                            <button
                                onClick={() => addProduct(product)}
                                className="btn btn-outline-dark shadow   rounded me-3 my-3"
                            >
                                <i className="fa-solid fa-cart-arrow-down me-2"></i>Add to cart
                            </button>
                            <Link to="/cart">
                                <button className="btn btn-dark shadow   ">Go to cart</button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Product;
