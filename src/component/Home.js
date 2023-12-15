import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Products from './Products';

const Home = () => {
    const bannerImages = [
        'https://elise.vn/media/wysiwyg/BANNER/cv-pe.jpg',
        'https://elise.vn/media/wysiwyg/A-SALE/cv-sale-1212.jpg',
        'https://elise.vn/media/wysiwyg/A-SALE/cv-stl-sale.jpg',
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <div className="Home">
            <div className="Home-banner">
                <Slider {...sliderSettings}>
                    {bannerImages.map((image, index) => (
                        <div key={index}>
                            <img src={image} alt={`Banner ${index + 1}`} />
                        </div>
                    ))}
                </Slider>
            </div>
            <Products />
        </div>
    );
};

export default Home;
