import React, { useContext, useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { AuthContext } from '../../provider/Authprovider';

const SingleMyToy = ({ myToy, handleButtonClick, selectedData, handleDelete }) => {
    const [selectedCar, setSelectedCar] = useState('');
    const [selectedSubCar, setSelectedSubCar] = useState('');
    const { user } = useContext(AuthContext)
    const handleCarChange = (event) => {
        setSelectedCar(event.target.value);
    };
    const handleSubChange = (event) => {
        setSelectedSubCar(event.target.value);
    };
    const { _id, availbaleQuantity, img, toy, subCatagory, name, price } = myToy;
    const handleAdd = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const toy = selectedSubCar
        const price = form.price.value
        const availbaleQuantity = form.availbaleQuantity.value
        const img = form.img.value
        const subCatagory = selectedCar;
        const details = form.textarea.value
        const userName = form.userName.value
        const ratings = form.Rating.value
        const newData = {
            name,
            toy,
            price,
            details,
            img,
            availbaleQuantity,
            subCatagory, userName, ratings

        }
    }
    return (
        <tr>
            <td>
                <button onClick={() => handleDelete(_id)} className="btn btn-error text-white btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
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
                    <label htmlFor="my-modal-4" className='btn btn-primary'>update one</label>
                    <input type="checkbox" id="my-modal-4" className="modal-toggle" />
                    <div className="modal ">
                        <div className="modal-box relative bg-error">
                            <label htmlFor="my-modal-4" className="btn btn-sm bg-white text-black btn-circle absolute right-2 top-2">✕</label>
                            <form onSubmit={handleAdd}>
                                <div>
                                    <input type="text" value={user?.email} placeholder="name" name='name' required className="input input-error w-1/2  input-bordered " />
                                    <select id="cars" onChange={handleSubChange} className='w-1/2 input-error border py-3 rounded-md' name="subCatagory" form="carform">
                                        <option value="sports car">sports car</option>
                                        <option value="truck">truck </option>
                                        <option value="mini police car">mini police car</option>
                                    </select>
                                </div>
                                <div>
                                    <select id="cars" onChange={handleCarChange} className='w-1/2 input-error border py-3 rounded-md' name="subCatagory" form="carform">
                                        <option value="Red Sports Car">Red Sports Car</option>
                                        <option value="Blue Racing Car">Blue Racing Car</option>
                                        <option value="Yellow Speedster">Yellow Speedster</option>
                                        <option value="Green Formula Car">Green Formula Car</option>
                                        <option value="Orange Drift Car">Orange Drift Car </option>
                                        <option value="Silver Supercar">Silver Supercar</option>
                                        <option value="Blaze Runner">Blaze Runner</option>
                                        <option value="Monster Mover">Monster Mover </option>
                                        <option value="Turbo Trucker">Turbo Trucker</option>
                                        <option value="Mighty Hauler">Mighty Hauler</option>
                                        <option value="Siren Squad Car">Siren Squad Car</option>
                                        <option value="Crime Buster Cruiser">Crime Buster Cruiser</option>
                                        <option value="Pursuit Enforcer">sports car</option>
                                        <option value="Patrol Guardian">Patrol Guardian</option>
                                        <option value="Rapid Response Unit">Rapid Response Unit</option>
                                    </select>
                                    <input type="text" placeholder="price" name='price' className="input input-error w-1/2 input-bordered mt-4 " />
                                </div>
                                <div>
                                    <input type="text" placeholder="img" name='img' required className="input input-error mt-4  w-1/2  input-bordered " />
                                    <input type="text" name='availbaleQuantity' placeholder="availbale Quantity" className="input input-error w-1/2 input-bordered" />
                                </div>
                                <div>
                                    <input type="text" value={user.displayName} placeholder="userName" name='userName' required className="input input-error mt-4  w-1/2  input-bordered " />
                                    <input type="text" name='Rating' placeholder="ratings" className="input input-error w-1/2 input-bordered" />
                                </div>
                                <textarea name="textarea" className="w-full  my-4 h-64 textarea textarea-error" placeholder="toy discription"></textarea><br />
                                <button className='btn btn-primary w-full  text-white'>update</button>
                            </form>
                        </div>
                    </div>
                </td>
            </td>
        </tr>
    );
};

export default SingleMyToy;