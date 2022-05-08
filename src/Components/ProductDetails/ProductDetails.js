import React, { useEffect, useState } from 'react'
import './ProductDetails.css'
import { useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { Button, Form } from 'react-bootstrap'

const ProductDetails = () => {
    const navigate = useNavigate();
    const [product, setProduct] = useState({})
    const { image, name, price, description, quantity, company } = product;
    const { id } = useParams();

    // Function for reload page //
    const handleReload = () => {
        fetch(`https://pocket-gadget.herokuapp.com/product/${id}`)
            .then(response => response.json())
            .then(data => {
                setProduct(data)
            })
    }

    // Get product with id //
    useEffect(() => {
        fetch(`https://pocket-gadget.herokuapp.com/product/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
    }, [id]);

    // Update product info //
    const handleUpdate = () => {
        if (quantity > 0) {
            let count = quantity - 1;
            const url = `https://pocket-gadget.herokuapp.com/update/${id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ itemQuantity: count })
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    handleReload();
                })
        } else {
            toast.error("You don't have enough items");
        }
    }

    // Restock items quantity //
    const handleIncrease = (e) => {
        e.preventDefault();
        const count = e.target.count.value;
        if (count === 0 || count < 0) {
            console.log(count)
            toast.error('Please Enter a valid quantity!', { id: 'error-quantity' });
            e.target.reset();
        }
        else {
            const restockQuantity = parseInt(count) + (parseInt(quantity));
            const url = `https://pocket-gadget.herokuapp.com/update/${id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ itemQuantity: restockQuantity })
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    handleReload();
                })
            toast.success('Item Restock successfully!', { id: 'valid-quantity' });
            e.target.reset();
        }

    }

    return (
        <div className='container'>
            <h1 className='text-center my-5'>Invent Your Product Details</h1>
            <div className='d-flex justify-content-around align-items-center'>
                <div className='w-50 text-center'>
                    <img src={image} alt="product" />
                </div>
                <div className='w-50'>
                    <h3 className='my-2'>{name}</h3>
                    <p><strong style={{ color: '#dc3545', width: '50%' }}>Description : </strong> {description}</p>
                    <div className='d-flex justify-content-between align-items-center'>
                        <p><b>Price : {price}</b></p>
                        <p><b>Quantity : {quantity}</b></p>
                    </div>
                    <h4>Seller : {company}</h4>
                    <div className='d-flex justify-content-between align-items-center'>
                        {
                            quantity === 0 ? <p style={{ fontWeight: 'bold' }} className='text-danger'>Out of Stock</p> : <button onClick={handleUpdate} className='btn delete-btn my-3'>Delivered</button>
                        }
                        <button onClick={() => navigate('/manage-inventories')} className='btn btn-outline-danger my-3'>Manage Inventory</button>
                    </div>
                </div>
            </div>

            <div className='my-5'>
                <h2>Restock Item</h2>
                <Form onSubmit={handleIncrease}>
                    <Form.Group className="mb-3 " controlId="formBasicNumber">
                        <Form.Label>Item Count</Form.Label>
                        <Form.Control type="number" name='count' placeholder="Enter number or restock product" />
                    </Form.Group>
                    <Button variant='danger' type="submit">
                        Restock
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default ProductDetails