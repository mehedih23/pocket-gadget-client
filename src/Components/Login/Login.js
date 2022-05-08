import axios from 'axios'
import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import toast from 'react-hot-toast'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import auth from '../../firebase.init'
import './Login.css'


const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // Google Sign In //

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);


    useEffect(() => {
        if (user || googleUser) {
            navigate(from, { replace: true });
        }
    }, [from, googleUser, navigate, user])

    // Email User //
    if (user) {
        toast.success('User Login Successfully', { id: 'loged-in' })
        navigate(from, { replace: true });
    }

    //googleUser//
    if (googleUser) {
        navigate(from, { replace: true });
        toast.success('Login Successfully', { id: 'success' })
    }

    // Email Loading //
    if (loading) {
        return <div className='vh-100 d-flex justify-content-center align-items-center'>
            <ClipLoader style={{ color: '#dc3545' }} loading={loading} size={150} />
        </div>
    }

    //googleLoading//
    if (googleLoading) {
        return <div className='vh-100 d-flex justify-content-center align-items-center'><ClipLoader loading={googleLoading} size={100} /></div>
    }

    // Email error //
    if (error) {
        toast.error(error.message, { id: 'login-error' });
    }

    //googleError//
    if (googleError) {
        toast.error(googleError?.message, { id: 'googleError2' })
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        await signInWithEmailAndPassword(email, password);
        const { data } = await axios.post('https://pocket-gadget.herokuapp.com/login', { email });
        localStorage.setItem('accessToken', data.accessToken);
        navigate(from, { replace: true });
    }



    return (
        <>
            <div className='container mb-3'>
                <div className='text-center' >
                    <Link to='/'>
                        <img className='img-fluid' src="https://i.ibb.co/0fGQ97H/logo2-1.png" alt="Brand" />
                    </Link>
                </div>
                <div>
                    <h2 className='text-center my-5 fw-bold'>Login</h2>
                    <Form onSubmit={handleLogin} className='mb-3'>
                        <Form.Group className="mb-3 col-lg-8 col-md-8 col-12 mx-auto" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name='email' type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-8 col-md-8 col-12 mx-auto" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name='password' type="password" placeholder="Password" />
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-8 col-md-8 col-12 mx-auto">
                            <Link className='reset-pass' to='/reset-pass'>Forgot Password?</Link>
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-8 col-md-8 col-12 mx-auto">
                            <Button className='w-100' variant="primary" type="submit">
                                Login
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
                        <Button
                            onClick={() => signInWithGoogle()}
                            className='w-100'
                            variant="light"
                            type="submit">
                            <img className='google' src="https://i.ibb.co/qn25rYN/google-1772223-1507807.png" alt="google" />
                            Sign in with Google
                        </Button>
                    </div>

                    <div className="my-3 col-lg-8 col-md-8 col-12 mx-auto">
                        <h5>New To Volunteer Network? <Link className='reset-pass' to='/signup'>Sign Up</Link></h5>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Login