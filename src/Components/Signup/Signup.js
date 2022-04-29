import React, { useState } from 'react';
import './Signup.css';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Signup = () => {
    const [checked, setChecked] = useState(false)

    return (
        <div className='container mb-3'>

            <div className='text-center'>
                <Link to='/'>
                    <img className='img-fluid' src="https://i.ibb.co/0fGQ97H/logo2-1.png" alt="Brand" />
                </Link>
            </div>

            <div>
                <h2 className='text-center my-5 fw-bold'>Sign Up</h2>
                <Form className='mb-3'>
                    <Form.Group className="mb-3 col-lg-8 col-md-8 col-12 mx-auto" controlId="formBasicText">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control name='name' type="text" placeholder="Enter your name" required />
                    </Form.Group>

                    <Form.Group className="mb-3 col-lg-8 col-md-8 col-12 mx-auto" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3 col-lg-8 col-md-8 col-12 mx-auto" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3 col-lg-8 col-md-8 col-12 mx-auto" controlId="formBasicPassword2">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control name='confirmPassword' type="password" placeholder="Confirm Password" required />
                    </Form.Group>

                    <Form.Group className="mb-3 col-lg-8 col-md-8 col-12 mx-auto" controlId="formBasicCheckbox">
                        <Form.Check onClick={() => setChecked(!checked)} style={{ color: 'red' }} type="checkbox" label="Accept our terms and condition" />
                    </Form.Group>

                    <Form.Group className="mb-3 col-lg-8 col-md-8 col-12 mx-auto">
                        <Button disabled={!checked} className='w-100' variant="primary" type="submit">
                            Sign Up
                        </Button>
                    </Form.Group>
                </Form>

                <div className='or-container w-50 mx-auto'>
                    <div className='or'>

                    </div>
                    <p>or</p>
                    <div className='or'>

                    </div>
                </div>


                <div className="google-container my-3 col-lg-8 col-md-8 col-12 mx-auto">
                    <Button className='w-100' variant="light" type="submit">
                        <img className='google' src="https://i.ibb.co/qn25rYN/google-1772223-1507807.png" alt="googe" />
                        Sign in with Google
                    </Button>
                </div>

                <div className="my-3 col-lg-8 col-md-8 col-12 mx-auto">
                    <h5>Already Have An Account? <Link className='reset-pass' to='/login'>Login</Link></h5>
                </div>

            </div>
        </div>
    )
}

export default Signup