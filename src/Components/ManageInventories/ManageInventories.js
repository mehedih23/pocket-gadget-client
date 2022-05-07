import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import AllProducts from '../AllProducts/AllProducts';


export const ReloadContext = createContext();

const ManageInventories = () => {
    const navigate = useNavigate();
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:5000/allproducts'
        fetch(url)
            .then(response => response.json())
            .then(data => setAllProducts(data))
    }, []);
    return (
        <ReloadContext.Provider value={setAllProducts} >
            <div className='container'>
                <div className='d-flex justify-content-between align-items-center'>
                    <h2 className='my-3'>Manage All Products</h2>
                    <button onClick={() => navigate('/additem')} className='btn btn-outline-danger'>Add Item</button>
                </div>
                <div className='row'>
                    {
                        allProducts.map(allpd => <AllProducts key={allpd._id}
                            allProducts={allpd}
                        ></AllProducts>)
                    }
                </div>
            </div>
        </ReloadContext.Provider>
    )
}

export default ManageInventories