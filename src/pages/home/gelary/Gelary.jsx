import React, { useEffect, useState } from 'react';
import SingleGelary from './SingleGelary';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gelary = () => {
    const [pictures, setPicture] = useState([])
    useEffect(() => {
        fetch('http://localhost:5001/gelary')
            .then(res => res.json())
            .then(data => setPicture(data))
    }, [])
    useEffect(() => {
        AOS.init({
            // Customize AOS options here
            // For example:
            duration: 800,  // Animation duration
            offset: 200,    // Offset (in pixels) from the element's position
        });
    }, []);
    return (
        <div className='bg-gray-300'>
            <h1 data-aos="fade-up" className='text-center text-black font-bold text-4xl py-11'> Our latest cullections</h1>
            <div data-aos="fade-up" className='grid lg:grid-cols-3 gap-6'>
                {
                    pictures.map(picture => <SingleGelary
                        key={picture._id}
                        picture={picture}
                    ></SingleGelary>)
                }
            </div>
        </div>
    );
};

export default Gelary;