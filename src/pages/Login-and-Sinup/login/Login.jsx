import React, { useContext, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../provider/Authprovider';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../../firebase/firebase.config';
const auth = getAuth(app)
const Login = () => {
    const {handlelogins} = useContext(AuthContext)
    const googleAuthProvider = new GoogleAuthProvider()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';
    const navigat = useNavigate()
    const handleLogin = (event) =>{
        event.preventDefault()
        const form = event.target
        console.log(form)
        const email = form.emails.value
        
        const password = form.passwords.value
        handlelogins(email,password)
        
        .then(result=>{
            const loggedUser = result.user
            navigat(from, { replace :true })||'/'
        })
        
        .catch(error=>console.error(error))
            
        
    }
    const handaleGoogleLogin = ()=>{
        signInWithPopup(auth,googleAuthProvider)
        .then(result=>{
            console.log(result.user)
            navigat('/')
        })
        .catch(err=>console.error(err))}
    useEffect(() => {
        AOS.init({
            // Customize AOS options here
            // For example:
            duration: 800,  // Animation duration
            offset: 200,    // Offset (in pixels) from the element's position
        });
    }, []);
    return (
        <div className="hero min-h-screen lg-flex bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse ">

                <div className="card h-full shadow-2xl bg-base-100 " data-aos="fade-left">
                    <form onSubmit={handleLogin}>
                        <div className="card-body"  >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" required name='emails' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" required name='passwords' placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-error">Login</button>
                            </div>
                        </div>
                    </form>
                    <hr className='border border-spacing-7 mx-2' />
                    <h1 className='text-center '>or</h1>
                    <div className='px-4'>
                        <button onClick={handaleGoogleLogin} className='btn btn-error btn-outline w-full '>login with google</button>
                        <button className='btn btn-error btn-outline w-full mt-4'>login with github</button>
                        <h1>haven't an account please <Link to={'/sinup'}><button className="btn btn-link text-error">Sinup</button> </Link> </h1>
                    </div>
                </div>
                <div data-aos="fade-right">
                    <img src={'https://www.shutterstock.com/image-vector/little-kid-standing-holding-door-260nw-2173445905.jpg'} className='h-screen w-full shadow-2xl bg-base-100' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;