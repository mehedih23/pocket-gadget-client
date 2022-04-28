import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'
import Helmet from 'react-helmet'
import Products from '../Products/Products';
import Tracker from '../Tracker/Tracker';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:5000/products'
        fetch(url)
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <>
            <Helmet>
                <title>Home - Pocket Gadget</title>
            </Helmet>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/qyQ24tS/iphone-slider-1.png"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2>iPhone 13</h2>
                            <h4>Your new superpower.</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/rZc0mbP/airpod-slider-2.png"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h2>AirPods</h2>
                            <h4>A magical connection to your devices.</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/fkwFznR/watch-slider-3.png"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h2>Apple Watch</h2>
                            <h4>It's the ultimate device for a healthy life.</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/VjmPCxH/macbook-slider-4.png"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h2 className='text-dark'>MacBook Pro</h2>
                            <h4>The power of macOS Monterey on M1.</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            {/* Limited 6 Products */}
            <div className='text-center my-4'>
                <h1>Inventory</h1>
                <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Invent Your <span style={{ color: '#B4161B' }}>Pocket Gadget</span></p>
            </div>
            <div className='container'>
                <div className='row'>
                    {
                        products.map(pd => <Products
                            key={pd._id}
                            product={pd}
                        ></Products>)
                    }
                </div>
            </div>

            <div>
                <Tracker></Tracker>
            </div>
        </>
    )
}

export default Home