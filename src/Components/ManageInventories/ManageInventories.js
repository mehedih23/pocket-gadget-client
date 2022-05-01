import React, { createContext, useEffect, useState } from 'react'
import AllProducts from '../AllProducts/AllProducts';


export const ReloadContext = createContext();

const ManageInventories = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:5000/allproducts'
        fetch(url)
            .then(response => response.json())
            .then(data => setAllProducts(data))
    }, []);
    return (
        <ReloadContext.Provider value={setAllProducts}>
            <div className='container'>
                <h2 className='text-center my-3'>Manage All Products</h2>
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