import React, { useContext } from 'react'
import toast from 'react-hot-toast';
import { MyReloadContext } from '../MyItems/MyItems';

const MyItem = ({ item }) => {
    const { _id, name, image, price, quantity, company, description, email } = item;

    const reload = useContext(MyReloadContext);
    const handleReload = () => {
        const url = `https://pocket-gadget.herokuapp.com/myproducts?email=${email}`;
        fetch(url)
            .then(response => response.json())
            .then(data => reload(data))
    }

    const handleDelete = () => {
        const url = `https://pocket-gadget.herokuapp.com/myproducts/${_id}`;
        const proceed = window.confirm('Are You Sure?')
        if (proceed) {
            fetch(url, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => {
                    handleReload();
                    toast.success('Item Delete Successfully.', { id: 'delete-successfully' })
                })
        }
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

export default MyItem