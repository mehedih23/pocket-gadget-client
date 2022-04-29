import React from 'react'
import { SiFacebook } from 'react-icons/si';
import { BsTwitter } from 'react-icons/bs';
import { BsChatTextFill } from 'react-icons/bs';
import { IoLogoYoutube } from 'react-icons/io';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer mt-5'>
            <div className='container'>
                <div className='row g-3'>
                    <div className='col-lg-4 col-md-6 col-12 text-center'>
                        <img src="https://i.ibb.co/0fGQ97H/logo2-1.png" alt="brand logo" />
                        <h2 className='brand-text' style={{ color: '#dc3545' }}>Pocket Gadget</h2>
                        <p style={{ color: 'white' }}>Privacy Policy</p>
                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                        <div className='text-white d-flex flex-column justify-content-center align-items-center py-4'>
                            <h5>Explore</h5>
                            <p>Home</p>
                            <p>About</p>
                            <p>Inventory</p>
                            <p>Career</p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-12 py-5'>

                        <div className='col-12'>
                            <input className='w-100 p-2' type="email" name='email' id='email' placeholder='Email Address' required />
                        </div>
                        <button style={{ backgroundColor: '#4b4b4d' }} className='btn btn-outline-dark text-white fw-bold my-3'>Subscribe</button>
                        <div className='d-flex justify-content-between'>
                            <div style={{ backgroundColor: '#4b4b4d', width: '50px', height: '50px', borderRadius: '50px' }} className='d-flex justify-content-center align-items-center'>
                                <SiFacebook style={{ fontSize: '30px' }} />
                            </div>
                            <div style={{ backgroundColor: '#4b4b4d', width: '50px', height: '50px', borderRadius: '50px' }} className='d-flex justify-content-center align-items-center'>
                                <BsTwitter style={{ fontSize: '30px' }} />
                            </div>
                            <div style={{ backgroundColor: '#4b4b4d', width: '50px', height: '50px', borderRadius: '50px' }} className='d-flex justify-content-center align-items-center'>
                                <BsChatTextFill style={{ fontSize: '30px' }} />
                            </div>
                            <div style={{ backgroundColor: '#4b4b4d', width: '50px', height: '50px', borderRadius: '50px' }} className='d-flex justify-content-center align-items-center'>
                                <IoLogoYoutube style={{ fontSize: '30px' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-white text-center py-3 m-0'>Copyright &copy; {new Date().getFullYear()}</p>
        </div>
    )
}

export default Footer