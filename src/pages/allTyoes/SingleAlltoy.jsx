import React, { useState } from 'react';


const SingleAlltoy = ({ alltoy,handleButtonClick,selectedData  }) => {
    
    const { _id, Name, Price, Picture, publish, userpicture, username } = alltoy;
   
    return (
        <tr>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={userpicture} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>

            </td>
            <td>{username}</td>
            <td>{publish}</td>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={Picture} alt="Avatar " />
                    </div>
                </div>
            </td>
            <td>{Name}</td>
            <td>{Price}</td>
            {/* The button to open modal */}
            <label htmlFor="my-modal-3" onClick={() => handleButtonClick(_id)} className="btn btn-error text-white ">Details</label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <img src={selectedData?.Picture} className='w-full h-64'  alt="" />
                    <h3 className="text-lg font-bold">{selectedData?.Name}</h3>
                    <p className="py-4">{selectedData?.discription}</p>
                </div>
            </div>
        </tr>
    );
};

export default SingleAlltoy;