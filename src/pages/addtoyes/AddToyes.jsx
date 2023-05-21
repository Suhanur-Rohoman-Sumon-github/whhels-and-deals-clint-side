import React, { useContext, useState } from 'react';
import { AuthContext } from '../../provider/Authprovider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddToyes = () => {
    const [selectedCar, setSelectedCar] = useState('');
    const [selectedSubCar, setSelectedSubCar] = useState('');
    const { user } = useContext(AuthContext)
    const handleCarChange = (event) => {
        setSelectedCar(event.target.value);
    };
    const handleSubChange = (event) => {
        setSelectedSubCar(event.target.value);
    };
    const handleAdd = (event) => {
        event.preventDefault()

        const form = event.target
        toast.success('product added', {
            position: toast.POSITION.TOP_CENTER
          });
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
            subCatagory,userName ,ratings

        }
        

        fetch('https://wheels-and-deals-server-side.vercel.app/mytoyes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div>
            <section>
                <img src="data:image/jpeg;base64,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" className='w-full blur-sm h-64' alt="" />
                <div className=""></div>
                <div className='absolute top-0 left-0 mt-64  opacity-70 w-full '>
                    <h1 data-aos="fade-left" className='text-5xl text-error text-center  ml-14 font-bold   absolute inset-0 '>Add toyes</h1></div>
            </section>
            <section className='my-11'>
                <div className='w-10/12 mx-auto border  border-error p-4'>
                    <form onSubmit={handleAdd}>
                        <div>
                            <input type="text" value={user?.email } placeholder="name" name='name' required className="input input-error w-1/2  input-bordered " />
                            <select id="cars" onChange={handleSubChange} className='w-1/2 input-error border py-3 rounded-md' name="subCatagory" form="carform">
                                <option value="catagory">catagory</option>
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
                            <input  type="text" placeholder="img" name='img' required className="input input-error mt-4  w-1/2  input-bordered " />
                            <input type="text" name='availbaleQuantity' placeholder="availbale Quantity" className="input input-error w-1/2 input-bordered" />
                        </div>
                        <div>
                            <input  type="text" value={user.displayName} placeholder="userName" name='userName' required className="input input-error mt-4  w-1/2  input-bordered " />
                            <input type="text" name='Rating' placeholder="ratings" className="input input-error w-1/2 input-bordered" />
                        </div>
                        <textarea name="textarea" className="w-full  my-4 h-64 textarea textarea-error" placeholder="toy discription"></textarea>
                        <button   className='btn btn-error w-full text-white'> add</button>
                        <ToastContainer />
                    </form>
                </div>
            </section>
        </div>
    );
};

export default AddToyes;