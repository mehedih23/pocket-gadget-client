import React from 'react'
import toast from 'react-hot-toast';

const ContactForm = () => {
    // submit function //
    const handleContact = (e) => {
        e.preventDefault()
        toast.success('Thank You For Contact Me!', { id: 'contact' })
        e.target.reset();
    }

    return (
        <div className='container'>
            <div className='text-center my-3'>
                <h2>Anything To Say?<strong style={{ color: '#cf363f' }}> Please Contact</strong></h2>
            </div>

            <form onSubmit={handleContact}>
                <div className='row'>
                    <div className="form-outline mb-4 col-md-6 col-lg-8 col-12 mx-auto">
                        <input type="text" id="form4Example1" className="form-control" required />
                        <label className="form-label" htmlFor="form4Example1">Name</label>
                    </div>
                </div>

                <div className='row'>
                    <div className="form-outline mb-4 col-md-6 col-lg-8 col-12 mx-auto">
                        <input type="email" id="form4Example2" className="form-control" required />
                        <label className="form-label" htmlFor="form4Example2">Email address</label>
                    </div>
                </div>

                <div className='row'>
                    <div className="form-outline mb-4 col-md-6 col-lg-8 col-12 mx-auto">
                        <textarea className="form-control" id="form4Example3" rows="4" required ></textarea>
                        <label className="form-label" htmlFor="form4Example3">Message</label>
                    </div>
                </div>
                <div className='row'>
                    <button type="submit" className="btn btn-primary btn-block mb-4 col-2 mx-auto">Send</button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm