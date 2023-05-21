import React from 'react';
import { Link } from 'react-router-dom';



const SingleAlltoy = ({ alltoy }) => {

    const { _id, availbaleQuantity, img, toy, subCatagory, name, price } = alltoy;

    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
            <td>{toy}</td>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={img} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>

            </td>
            <td>{subCatagory}</td>
            <td>{availbaleQuantity}</td>
            <td>
                <Link to={`myToyes/${_id}`}><button className='btn btn-error text-white'>dtails</button></Link>
            </td>

           
        </tr>
    );
};

export default SingleAlltoy;