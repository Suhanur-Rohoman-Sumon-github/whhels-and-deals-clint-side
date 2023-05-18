import React from 'react';
import { FaRegStar,FaStar  } from "react-icons/fa";
import Rating from 'react-rating';

const SingleCars = ({ car }) => {
    const { Picture, Name, Price,Ratings} = car
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={Picture} className='w-full h-64' alt="Shoes" /></figure>
            <div className="card-body ">
                <div className='flex justify-between items-center'>
                <div>
                <h2 className="card-title">{Name}</h2>
                <p>{Price}</p>
                <p className='font-bold'>ratings : <Rating className='ml-2'
                    placeholderRating={Ratings}
                    readonly
                    emptySymbol={<FaRegStar />}
                    placeholderSymbol={<FaStar className='text-warning' />}
                    fullSymbol={<FaStar />}
                /></p>
                </div>
                <div>
                <button className="btn btn-error btn-outline">Veiw dtails</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCars;