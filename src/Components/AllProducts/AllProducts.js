import React, { useContext } from 'react'
import toast from 'react-hot-toast';
import { ReloadContext } from '../ManageInventories/ManageInventories';

const AllProducts = ({ allProducts }) => {
    const { _id, name, image, price, quantity, company, description } = allProducts;

    const reload = useContext(ReloadContext);
    const handleReload = () => {
        fetch(`http://localhost:5000/allproducts`)
            .then(response => response.json())
            .then(data => reload(data))
    }

    const handleDelete = (e) => {
        const url = `http://localhost:5000/product/${_id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
                handleReload();
                toast.success('Item Delete Successfully.', { id: 'delete-successfully' })
            })
    }



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
            <button onClick={handleDelete} className='btn mx-3 manage-btn'>Delete</button>
        </div>
    )
}

export default AllProducts