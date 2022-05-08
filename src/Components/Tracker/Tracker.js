import React from 'react'
import CountUp from 'react-countup';

const Tracker = () => {
    return (
        <div className='container my-5'>
            <h2 className='text-center mb-3'><span style={{ color: '#b4161b' }}>Pocket Gadget</span> Online Store in Numbers </h2>
            <div className='row g-3'>
                <div
                    className='col-lg-4 col-md-6 col-12 text-center'>
                    <div>
                        <img className='img-fluid mb-2' src="https://i.ibb.co/vQ6RbMM/online-delivery-service-free-vector.png" alt="online delivery service" />
                    </div>
                    <h1 style={{ color: '#B4161B' }}><CountUp delay={3} end={13472} duration={7} /></h1>
                    <p style={{ fontSize: '20px' }}>Customer We Have</p>
                </div>
                <div
                    className='col-lg-4 col-md-6 col-12 text-center'>
                    <div>
                        <img className='img-fluid mb-2' src="https://i.ibb.co/DVwB0p4/shopping-cart-full-of-gifts.png" alt="online delivery service" />
                    </div>
                    <h1 style={{ color: '#B4161B' }}><CountUp delay={3} end={20652} duration={12} /></h1>
                    <p style={{ fontSize: '20px' }}>Items in our catalog</p>
                </div>
                <div
                    className='col-lg-4 col-md-6 col-12 text-center'>
                    <div>
                        <img className='img-fluid mb-2' src="https://i.ibb.co/Chp9t2g/earth.png" alt="online delivery service" />
                    </div>
                    <h1 style={{ color: '#B4161B' }}><CountUp delay={3} end={195} duration={4} /></h1>
                    <p style={{ fontSize: '20px' }}>Countries we ship to</p>
                </div>
            </div>
        </div>
    )
}

export default Tracker