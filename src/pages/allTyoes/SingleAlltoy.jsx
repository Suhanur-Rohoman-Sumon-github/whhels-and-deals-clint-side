import React, { useContext, useState } from 'react';
import { AuthContext } from '../../provider/Authprovider';


const SingleAlltoy = ({ alltoy, handleButtonClick, selectedData }) => {
    const { user} = useContext(AuthContext)

    const { _id, availbaleQuantity,img,toy,subCatagory, name, price } = alltoy;

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
            {/* The button to open modal */}
            <label htmlFor="my-modal-3" onClick={() => handleButtonClick(_id)} className="btn btn-error text-white ">Details</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal ">
                <div className="modal-box relative bg-error text-white">
                    <label htmlFor="my-modal-3" className="btn btn-sm bg-white text-black btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{selectedData?.Name}</h3>
                    <p className="py-4">catagory : {selectedData?.toy}</p>
                    <p className="py-4"> sub catagory {selectedData?.subCatagory}</p>
                    <p className="py-4"> Quantity{selectedData?.availbaleQuantity}</p>
                    <p className="py-4">dtails: {selectedData?.details}</p>
                </div>
            </div>
        </tr>
    );
};

export default SingleAlltoy;