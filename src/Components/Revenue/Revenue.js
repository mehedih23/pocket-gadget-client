import React from 'react'
import { ProgressBar } from 'react-bootstrap';
import { BsArrowUpShort, BsArrowDownShort } from 'react-icons/bs';

const Revenue = () => {
    return (
        <>
            <h2 className='text-center'><span style={{ 'color': 'rgb(180, 22, 27)' }}>Revenue</span> Of This Month</h2>
            <div style={{ 'backgroundColor': '#212332' }} className='mt-3'>
                <div className='container py-4'>
                    <div className='row g-3'>
                        <div className='col-lg-3 col-md-6 col-12'>
                            <div className='p-3' style={{ 'backgroundColor': '#2a2e3f', 'color': '#7b818f' }}>
                                <p>Monthly Profit</p>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p style={{ 'fontSize': '20px', 'color': 'white' }}>$ 25,837</p>
                                    <p>
                                        <BsArrowUpShort style={{ 'color': '#38cb76' }} />
                                        40% increase
                                    </p>
                                </div>
                                <ProgressBar animated now={55} />
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-12'>
                            <div className='p-3' style={{ 'backgroundColor': '#2a2e3f', 'color': '#7b818f' }}>
                                <p>Monthly Orders</p>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p style={{ 'fontSize': '20px', 'color': 'white' }}> 12,837</p>
                                    <p>
                                        <BsArrowUpShort style={{ 'color': '#38cb76' }} />
                                        62% increase
                                    </p>
                                </div>
                                <ProgressBar variant='warning' animated now={82} />
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-12'>
                            <div className='p-3' style={{ 'backgroundColor': '#2a2e3f', 'color': '#7b818f' }}>
                                <p>Monthly Revenue</p>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p style={{ 'fontSize': '20px', 'color': 'white' }}>$ 85,837</p>
                                    <p>
                                        <BsArrowUpShort style={{ 'color': '#38cb76' }} />
                                        38% increase
                                    </p>
                                </div>
                                <ProgressBar variant='success' animated now={60} />
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-12'>
                            <div className='p-3' style={{ 'backgroundColor': '#2a2e3f', 'color': '#7b818f' }}>
                                <p>Monthly Expense</p>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p style={{ 'fontSize': '20px', 'color': 'white' }}>$ 54,837</p>
                                    <p>
                                        <BsArrowDownShort style={{ 'color': '#cf363f' }} />
                                        20% decrease
                                    </p>
                                </div>
                                <ProgressBar variant='danger' animated now={70} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Revenue