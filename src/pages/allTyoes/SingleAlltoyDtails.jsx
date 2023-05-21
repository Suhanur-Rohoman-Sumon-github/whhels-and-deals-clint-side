import React, { useEffect, useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';

const SingleAlltoyDtails = () => {
    const [alltoyes, setAlltoyes] = useState([])

    const data = useLoaderData()
    console.log(data)
    const {details,img,name,price,ratings,subCatagory,toy,userName} = data
    return (
        <div>
            <section>
                <h1>this is img section</h1>
            </section>
            <section className='lg:flex'>
                <div className='w-[85%]'>
                    <div className="card w-full glass">
                        <figure><img src={img} className='w-full h-96' alt="car!" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{name}</h2>
                            <h2 className="card-title">{userName}</h2>
                            <h2 className="card-title">{price}</h2>
                            <h2 className="card-title">{toy}</h2>
                            <h2 className="card-title">{subCatagory}</h2>

                            <p>{details}</p>
                            <p className='font-bold text-black'>ratings : <Rating className='ml-2'
                                placeholderRating={ratings}
                                readonly
                                emptySymbol={<FaRegStar />}
                                placeholderSymbol={<FaStar className='text-warning' />}
                                fullSymbol={<FaStar />}
                            /></p>
                        </div>
                    </div>
                </div>
                <div className='w-15%'>
                    <h1>suhanur rohoman sumon</h1>
                </div>
            </section>
            </div>
    );
};

export default SingleAlltoyDtails;