import React, { useState } from 'react';
import './Signup.css';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';



const Signup = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [checked, setChecked] = useState(false);
    const [name, setName] = useState('');
    const handleName = (e) => {
        setName(e.target.value);
    }

    const [
        createUserWithEmailAndPassword,
        newUser,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    if (newUser) {
        newUser.displayName = name;
        toast.success('Account Created Successfully', { id: 'account-created-successfully' })
        navigate(from, { replace: true });
    }

    if (loading) {
        return <div className='vh-100 d-flex justify-content-center align-items-center'>
            <ClipLoader style={{ color: '#dc3545' }} loading={loading} size={150} />
        </div>
    }

    if (error) {
        toast.error(error.message, { id: 'user-create-error' });
        return navigate('/')
    }


    const handleSignUp = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        if (password !== confirmPassword) {
            toast.error('Password Mismatched', { id: 'pass-error' })
        }
        else {
            createUserWithEmailAndPassword(email, password)
            e.target.reset();
        }
    }


    return (
        <div className='container mb-3'>
            <div className='text-center'>
                <Link to='/'>
                    <img className='img-fluid' src="https://i.ibb.co/0fGQ97H/logo2-1.png" alt="Brand" />
                </Link>
            </div>
            <div>
                <h2 className='text-center my-5 fw-bold'>Sign Up</h2>
                <Form onSubmit={handleSignUp} className='mb-3'>
                    <Form.Group className="mb-3 col-lg-8 col-md-8 col-12 mx-auto" controlId="formBasicText">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control onBlur={handleName} name='name' type="text" placeholder="Enter your name" required />
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
                        <img className='google' src="https://i.ibb.co/qn25rYN/google-1772223-1507807.png" alt="google" />
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