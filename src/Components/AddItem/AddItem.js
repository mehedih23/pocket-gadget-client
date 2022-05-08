import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import auth from '../../firebase.init';

const AddItem = () => {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    // loading //
    if (loading) {
        return <div className='vh-100 d-flex justify-content-center align-items-center'>
            <ClipLoader loading={loading} size={150} />
        </div>
    }

    // error //
    if (error) {
        toast.error(error.message, { id: 'add-error' });
    }

    const handleAddItem = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const image = e.target.image.value;
        const company = e.target.company.value;
        const quantity = e.target.quantity.value;
        const email = e.target.email.value;
        const description = e.target.description.value;

        const item = { name, price, image, company, quantity, email, description };

        const url = 'https://pocket-gadget.herokuapp.com/allproducts';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(item),
        })
            .then(response => response.json())
            .then(data => {
                toast.success('Item Added Successfully', { id: 'item-successfully' })
                navigate('/manage-inventories')
            })

    }


    return (
        <div className='container'>
            <div>
                <h2 className='col-lg-8 col-md-8 col-12 mx-auto'>Add Item to Inventory</h2>
            </div>
            <Form onSubmit={handleAddItem}>
                <Form.Group className="mb-3 col-lg-8 col-md-8 col-12 mx-auto" controlId="formBasicText">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Item Name" required />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-8 col-md-8 col-12 mx-auto" controlId="formBasicText">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="number" name='price' placeholder="Enter Item Price" required />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-8 col-md-8 col-12 mx-auto" controlId="formBasicText">
                    <Form.Label>Image</Form.Label>
                    <Form.Control type="text" name='image' placeholder="Enter Item Image Link" required />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-8 col-md-8 col-12 mx-auto" controlId="formBasicText">
                    <Form.Label>Seller</Form.Label>
                    <Form.Control type="text" name='company' placeholder="Enter Seller Name" required />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-8 col-md-8 col-12 mx-auto" controlId="formBasicText">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="text" name='quantity' placeholder="Enter Item quantity" required />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-8 col-md-8 col-12 mx-auto" controlId="formBasicText">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name='email' defaultValue={user.email} readOnly disabled placeholder="Enter Email" required />
                </Form.Group>
                <Form.Group className="mb-3 col-lg-8 col-md-8 col-12 mx-auto" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Item Description</Form.Label>
                    <Form.Control as="textarea" name='description' rows={3} required />
                </Form.Group>
                <div className='col-lg-8 col-md-8 col-12 mx-auto'>
                    <Button variant="primary" type="submit">
                        Add
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default AddItem