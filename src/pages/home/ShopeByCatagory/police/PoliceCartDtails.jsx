import React from 'react';
import Rating from 'react-rating';
import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const PoliceCartDtails = ({police}) => {
    const { _id, Picture, Name, Price, Ratings } = police
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
                        <Link to={`/police/${_id}`}><button className="btn btn-error btn-outline">Veiw dtails</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PoliceCartDtails;