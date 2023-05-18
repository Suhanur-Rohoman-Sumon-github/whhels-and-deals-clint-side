import React, { useEffect } from 'react';
import { Circle } from 'rc-progress';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyChoseUs = () => {
    useEffect(() => {
        AOS.init({
            // Customize AOS options here
            // For example:
            duration: 800,  // Animation duration
            offset: 200,    // Offset (in pixels) from the element's position
        });
    }, []);
    return (
        <div className='  bg-gray-400'>
            <h1 data-aos="fade-up" className='text-center text-white font-bold text-4xl py-11'> Why chose use </h1>
            <div className='grid md:grid-cols-5 p-4 ' data-aos="fade-up">
                <div>
                    <h1 className='text-white font-bold text-xl text-center'>Innovative Designs</h1>
                    <Circle className='w-32 h-32 mt-6 mx-auto' percent={90} strokeWidth={4} strokeColor="#3ABFF8" />
                    <h1 className='text-white font-bold text-xl text-center'>90%</h1>
                </div>
                <div>
                    <h1 className='text-white font-bold text-xl text-center'>Sustainable Materials</h1>
                    <Circle className='w-32 h-32 mt-6 mx-auto' percent={91} strokeWidth={4} strokeColor="#3ABFF8" />
                    <h1 className='text-white font-bold text-xl text-center'>91%</h1>
                </div>
                <div>
                    <h1 className='text-white font-bold text-xl text-center'>Educational Value</h1>
                    <Circle className='w-32 h-32 mt-6 mx-auto' percent={92} strokeWidth={4} strokeColor="#3ABFF8" />
                    <h1 className='text-white font-bold text-xl text-center'>92%</h1>
                </div>
                <div>
                    <h1 className='text-white font-bold text-xl text-center'>Customization Options</h1>
                    <Circle className='w-32 h-32 mt-6 mx-auto' percent={93} strokeWidth={4} strokeColor="#3ABFF8" />
                    <h1 className='text-white font-bold text-xl text-center'>93%</h1>
                </div>
                <div>
                    <h1 className='text-white font-bold text-xl text-center'>Social Responsibility</h1>
                    <Circle className='w-32 h-32 mt-6 mx-auto' percent={94} strokeWidth={4} strokeColor="#3ABFF8" />
                    <h1 className='text-white font-bold text-xl text-center'>94%</h1>
                </div>
            </div>
        </div>
    );
};

export default WhyChoseUs;