import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Products.css'

const Products = ({ product }) => {
    const { _id, name, image, price, quantity, company, description } = product;
    const navigate = useNavigate();
    return (
        <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className='col-lg-4 col-md-6 col-12 my-4 product-container'>
            <div className='text-center mb-3'>
                <img className='img-fluid' src={image} alt="" />
            </div>
            <div className='info-container px-3'>
                <h3>{name}</h3>
                <h4><strong> Price : ${price}</strong></h4>
                <p><strong>Quantity : {quantity}</strong></p>
                <p><strong>Seller : {company}</strong></p>
                <p className='text-container'><strong>Description :</strong> {description.length > 250 ? description.slice(0, 250) : description}</p>
            </div>
            <button onClick={() => navigate(`/inventory/${_id}`)} className='btn mx-3 manage-btn'>Mange</button>
        </div>
    )
}

export default Products