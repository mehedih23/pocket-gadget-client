import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import './TopProducts.css'

const TopProducts = () => {
    // get products from database //
    const [topProducts, setTopProducts] = useState([])
    useEffect(() => {
        const url = 'https://pocket-gadget.herokuapp.com/top-products';
        fetch(url)
            .then(response => response.json())
            .then(data => setTopProducts(data))
    }, []);

    return (
        <div>
            <h2 className='my-4 text-center'>Products Of The <span style={{ 'color': 'rgb(180, 22, 27)' }}>Year</span></h2>

            <Table responsive striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Category</th>
                        <th>Name</th>
                        <th>Sale Value</th>
                        <th>Sale Info</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        topProducts.map(tp => {
                            return <tr className=''>
                                <td>{tp.serial}</td>
                                <td>
                                    <div className='table-image'>
                                        <img className='img-fluid' src={tp.image} alt="items" />
                                    </div>
                                </td>
                                <td>{tp.name}</td>
                                <td>$ {tp.price}</td>
                                <td>{tp.update}</td>
                                <td>{tp.status}</td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
        </div >
    )
}

export default TopProducts