import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import ClipLoader from "react-spinners/ClipLoader";
import toast from 'react-hot-toast';

function RequireAuth({ children }) {
    let location = useLocation();
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return <div className='vh-100 d-flex justify-content-center align-items-center'>
            <ClipLoader style={{ color: '#dc3545' }} loading={loading} size={150} />
        </div>
    }

    if (error) {
        toast.error(error.message, { id: 'private-route-error' })
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
}

export default RequireAuth;