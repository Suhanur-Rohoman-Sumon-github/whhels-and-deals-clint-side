import React from 'react';
import AboutUs from '../aboutus/AboutUs';
import WhyChoseUs from '../whyChoseUs/WhyChoseUs';
import ShopeByCatagory from '../ShopeByCatagory/ShopeByCatagory';
import Gelary from '../gelary/Gelary';
import Testimonial from '../testimonial/Testimonial';
import Banner from '../banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutUs />
            <WhyChoseUs />
            <ShopeByCatagory />
            <Gelary />
            <Testimonial />
        </div>
    );
};

export default Home;