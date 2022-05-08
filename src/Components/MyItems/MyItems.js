import React, { createContext, useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import toast from 'react-hot-toast';
import auth from '../../firebase.init'
import MyItem from '../MyItem/MyItem'


export const MyReloadContext = createContext();

const MyItems = () => {
    const [user] = useAuthState(auth)
    const [myItems, setMyItems] = useState([]);
    useEffect(() => {
        const getMyItems = () => {
            const email = user.email;
            const url = `http://localhost:5000/myproducts?email=${email}`;
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
                    } else {
                        setMyItems(data)
                    }
                })
        }
        getMyItems();
    }, [user]);
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