import React, { useContext } from 'react';
import { AuthContext } from '../../provider/Authprovider';

const SingleMyToy = ({ myToy, handleButtonClick, selectedData,handleDelete }) => {
    const { user } = useContext(AuthContext)
    const { _id, availbaleQuantity, toy, subCatagory, name, price } = myToy;
    return (
        <tr>
            <td>
                <button onClick={()=>handleDelete(_id)} className="btn btn-error btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>

            </td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{toy}</td>
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

export default SingleMyToy;