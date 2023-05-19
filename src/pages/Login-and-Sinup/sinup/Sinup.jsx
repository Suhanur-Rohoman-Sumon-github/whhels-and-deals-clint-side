import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthContext } from '../../../provider/Authprovider';
import { getAuth, updateProfile } from 'firebase/auth';
import app from '../../../firebase/firebase.config';
const auth = getAuth(app)
const Sinup = () => {
    const {handleSinups,user} = useContext(AuthContext)
    const navigat = useNavigate()
    const handaleSinup = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const imgUrl = form.imgurl.value
        const email = form.email.value
        const password = form.Password.value
        const confirmpassword = form.confirm.value

        handleSinups(email, password)
            .then((result) => {
                console.log(result)
                navigat('/')
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: imgUrl
                })    
            })
            .catch(error => console.error(error))
    }

    useEffect(() => {
        AOS.init({
            // Customize AOS options here
            // For example:
            duration: 800,  // Animation duration
            offset: 200,    // Offset (in pixels) from the element's position
        });

    }, []);
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div data-aos="fade-right" className=''>
                    <img src={'https://www.shutterstock.com/image-vector/school-boy-260nw-164243525.jpg'} className='h-screen w-full shadow-2xl bg-base-100' alt="" />
                </div>
                <div className="card h-full shadow-2xl bg-base-100 " data-aos="fade-left">
                    <form onSubmit={handaleSinup}>
                        <div className="card-body"  >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" required placeholder="Name" name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Img url</span>
                                </label>
                                <input type="text" name='imgurl' required placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" required name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Pssword</span>
                                </label>
                                <input type="Password" required name='Password' placeholder="Password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='confirm' placeholder="confirm password" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="cursor-pointer label">
                                    <input type="checkbox" className="checkbox checkbox-error" />Accecpt terms and condition
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-error">sinup</button>
                            </div>
                        </div>
                    </form>
                    <hr className='border border-spacing-7 mx-2' />
                    <h1 className='text-center '>or</h1>
                    <div className='px-4'>
                        <button className='btn btn-error btn-outline w-full '>continue with google</button>
                        <button className='btn btn-error btn-outline w-full mt-4'>constinu with github</button>
                        <h1>Already have an account please <Link to={'/login'}><button className="btn btn-link text-error">Login</button> </Link> </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sinup;