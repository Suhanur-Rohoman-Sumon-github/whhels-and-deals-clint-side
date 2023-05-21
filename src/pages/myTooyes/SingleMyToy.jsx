import React from 'react';
import { FaPen, FaRegStar, FaRegTrashAlt, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';



const SingleMyToy = ({ myToy, handleButtonClick, selectedData, handleDelete, }) => {
   
   
    const { _id, availbaleQuantity, img, toy, subCatagory, name, price } = myToy;
    const handleUpdate= (event) => {
        const form = event.target
        const price = form.price.value
        const availbaleQuantity = form.availbaleQuantity.value
        const img = form.img.value
        const details = form.textarea.value
        const updatedNewData = {
            price,
            details,
            img,
            availbaleQuantity,

        }
        fetch(`https://wheels-and-deals-server-side.vercel.app/mytoyes/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedNewData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
              
            })
    }
   
    return (
        <tr>
            <td>
                <button onClick={() => handleDelete(_id)} className="btn btn-error text-white btn-circle">
                   <FaRegTrashAlt />
                </button>
            </td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{toy}</td>
            <td>{subCatagory}</td>
            <td>{availbaleQuantity}</td>
            <td>
            
                {/* The button to open modal */}
                <label htmlFor="my-modal-3" onClick={() => handleButtonClick(_id)} className="btn btn-error text-white ">Details</label>

                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal ">
                    <div className="modal-box relative bg-error text-white">
                        <label htmlFor="my-modal-3" className="btn btn-sm bg-white text-black btn-circle absolute right-2 top-2">✕</label>
                        <img src={selectedData?.img} className='w-full h-64' alt="" />
                        <h3 className="text-lg font-bold">{selectedData?.Name}</h3>
                        <p className="py-4">catagory : {selectedData?.toy}</p>
                        <p className="py-4"> sub catagory {selectedData?.subCatagory}</p>
                        <p className="py-4"> Quantity{selectedData?.availbaleQuantity}</p>
                        <p className="py-4">dtails: {selectedData?.details}</p>
                        <p className='font-bold  text-black'>ratings : <Rating className='ml-2'
                            placeholderRating={selectedData?.ratings}
                            readonly
                            emptySymbol={<FaRegStar />}
                            placeholderSymbol={<FaStar className='text-warning' />}
                            fullSymbol={<FaStar />}
                        /></p>
                    </div>
                </div>
            </td>
            <td>
                <td>
                 
                  <label  htmlFor="my-modal-4" className='btn text-white btn-error'><FaPen/></label>
                    <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                    <div className="modal ">
                        <div className="modal-box relative bg-error">
                            <label htmlFor="my-modal-4" className="btn btn-sm bg-white text-black btn-circle absolute right-2 top-2">✕</label>
                            <form onSubmit={handleUpdate}>

                                <input type="text" placeholder="price" name='price' className="input input-error w-1/2 input-bordered mt-4 " />
                                <div>
                                    <input type="text" placeholder="img" name='img' required className="input input-error mt-4  w-1/2  input-bordered " />
                                    <input type="text" name='availbaleQuantity' placeholder="availbale Quantity" className="input input-error w-1/2 input-bordered" />
                                </div>

                                <textarea name="textarea" className="w-full  my-4 h-64 textarea textarea-error" placeholder="toy discription"></textarea><br />
                                <button className='btn bg-slate-200 w-full  text-error'>update</button>
                            </form>
                        </div>
                    </div>
                  
                </td>
            </td>
        </tr>
    );
};

export default SingleMyToy;