import React, { useState } from 'react'
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import auth from '../../firebase.init';


const ResetPass = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

    // error //
    if (error) {
        toast.error(error.message, { id: 'reset-error' });
        return navigate('/')
    }

    // loading //
    if (sending) {
        return <div className='vh-100 d-flex justify-content-center align-items-center'>
            <ClipLoader style={{ color: '#dc3545' }} loading={sending} size={150} />
        </div>
    }
    return (
        <div className='container'>
            <h2>Reset Your Password</h2>
            <form>
                <div className='col-lg-8 col-md-8 col-12 me-auto'>
                    <input className='w-100 my-3' type="email" value={email}
                        onChange={(e) => setEmail(e.target.value)} name="email" id="email" required />
                </div>
                <div
                    onClick={async () => {
                        await sendPasswordResetEmail(email);
                        toast.success('Please Check Your Email', { id: 'reset-password' })
                    }}
                >
                    <input className='btn btn-outline-danger' type="submit" value="Reset Password" />
                </div>
            </form>

        </div>
    )
}

export default ResetPass