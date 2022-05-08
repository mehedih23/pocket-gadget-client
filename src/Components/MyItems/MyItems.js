import { signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init'
import MyItem from '../MyItem/MyItem'


export const MyReloadContext = createContext();

const MyItems = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth)
    const [myItems, setMyItems] = useState([]);
    useEffect(() => {
        const getMyItems = () => {
            const email = user.email;
            const url = `https://pocket-gadget.herokuapp.com/myproducts?email=${email}`;
            const token = localStorage.getItem('accessToken');
            fetch(url, {
                headers: {
                    authorization: token
                }
            })
                .then(response => response.json())
                .then(data => {
                    if (data.message) {
                        toast.error(data.message, { id: 'not-authorized' })
                        signOut(auth);
                        navigate('/login')
                    } else {
                        setMyItems(data)
                    }
                })
        }
        getMyItems();
    }, [navigate, user]);
    return (
        <MyReloadContext.Provider value={setMyItems}>
            <div className='container'>
                <h2>My Items</h2>
                <div className='row'>
                    {
                        myItems?.map(item => <MyItem
                            key={item._id}
                            item={item}
                        ></MyItem>)
                    }
                </div>
            </div>
        </MyReloadContext.Provider>
    )
}

export default MyItems