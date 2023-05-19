import React, { useContext, useState } from 'react';
import { AuthContext } from '../../provider/Authprovider';


const SingleAlltoy = ({ alltoy, handleButtonClick, selectedData }) => {
    const { user} = useContext(AuthContext)
    console.log(user)
    console.log(alltoy)

    const { _id, availbaleQuantity, img,subCatagory, name, price } = alltoy;

    return (
        <tr>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>

            </td>
            <td>{name}</td>
            <td>{}</td>
            <td>{price}</td>
            <td>{subCatagory}</td>
            {/* The button to open modal */}
            <label htmlFor="my-modal-3" onClick={() => handleButtonClick(_id)} className="btn btn-error text-white ">Details</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <img src={selectedData?.Picture} className='w-full h-64' alt="" />
                    <h3 className="text-lg font-bold">{selectedData?.Name}</h3>
                    <p className="py-4">{selectedData?.discription}</p>
                    <button className='btn btn-error text-white'> Add </button>
                </div>
            </div>
        </tr>
    );
};

export default SingleAlltoy;