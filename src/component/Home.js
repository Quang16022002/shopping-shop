import React from 'react';
import Products from './Products';

const Home = () => {
    return (
        <div className="Home">
            <div className="Home-banner">
                <img src="https://elise.vn/media/wysiwyg/BANNER/cv-pe.jpg" />
            </div>
            <Products />
        </div>
    );
};

export default Home;
