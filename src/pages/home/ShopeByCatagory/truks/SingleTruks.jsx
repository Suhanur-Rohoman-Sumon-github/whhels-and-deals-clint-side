import React from 'react';
import { FaArrowRight, FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const SingleTruks = ({truck}) => {
    const { _id, Picture, Name, Price, Ratings } = truck
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={Picture} className='w-full h-52' alt="Shoes" /></figure>
            <div className="card-body ">
                <div className='flex justify-between items-center'>
                    <div>
                        <h2 className="card-title text-black" >{Name}</h2>
                        <p className='text-black'>{Price}</p>
                        <p className='font-bold text-black'>ratings : <Rating className='ml-2'
                            placeholderRating={Ratings}
                            readonly
                            emptySymbol={<FaRegStar />}
                            placeholderSymbol={<FaStar className='text-warning' />}
                            fullSymbol={<FaStar />}
                        /></p>
                    </div>
                    <div>
                        <Link to={`/traks/${_id}`}><button className="btn btn-error btn-outline"><FaArrowRight /></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleTruks;