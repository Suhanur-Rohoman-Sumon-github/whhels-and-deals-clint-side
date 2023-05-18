import { Link } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-gray-500  text-white">
            <Link to={'/'}>
                <div className=''>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR52zCO3VG8E5YLkejXT4o_BAFjlNsd1lK80WVURovBPOI1P8wzrAiE&s=0" alt="" />
                    <h1 className='text-4xl font-bold text-gray-100'>Wheels And Deels</h1>
                </div>
            </Link>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;