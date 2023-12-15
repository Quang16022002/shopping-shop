import React from 'react';

const About = () => {
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">STORE INTRODUTION</h2>
            <div className="row">
                <div className="col-md-6">
                    <img
                        src="https://lh3.googleusercontent.com/p/AF1QipOSxpw1qomFmI_j3QWPiNZq7DXoTNV_kQWQEg6l=s680-w680-h510"
                        alt="Cửa hàng của chúng tôi"
                        className="img-fluid rounded"
                    />
                </div>
                <div className="col-md-6">
                    <p>
                        Welcome to our store! We are a store specializing in providing high quality products at
                        reasonable prices. Our staff is always happy to serve and ensure you have the best shopping
                        experience.
                    </p>
                    <p>
                        We offer a wide range of products from fashion to electronics, from home appliances to personal
                        items. Explore our store to find the best products for you!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
