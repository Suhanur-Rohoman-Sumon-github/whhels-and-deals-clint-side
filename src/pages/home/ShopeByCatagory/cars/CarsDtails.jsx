import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CarsDtails = () => {
    const cars = useLoaderData()
    const { _id, Picture, Name, Price, discription } = cars
    return (
        <>

            <section className='lg:flex'>
                <div className='w-[85%]'>
                    <div className="card w-full glass">
                        <figure><img src={Picture} className='w-full h-96' alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{Name}</h2>
                            <p>{discription}</p>
                        </div>
                    </div>
                </div>
                <div className='w-15%'>
                    <h1>suhanur rohoman sumon</h1>
                </div>
            </section>
        </>
    );
};

export default CarsDtails;