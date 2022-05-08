import React from 'react'

const Blogs = () => {
    return (
        <div className='container'>
            <h1 style={{ color: '#dc3545' }} className='text-center my-3'>Frequently Asked Questions</h1>
            <div className='my-3'>
                <h3>1. Difference between javascript and nodejs?</h3>
                <h5>JavaScript</h5>
                <p>Javascript is a client side programming language, that is used for writing script in the website. Javascript is enough for adding HTML and connect with DOM. That's why javascript can run any browser with help of browser engine. Javascript is used for frontend development.</p>
                <h5>NodeJS</h5>
                <p>Nodejs is written in C, C++ and Javascript. NodeJS is a Javascript runtime environment. We can run Javascript outside the browser with the help of NodeJS. NodeJS is mostly used in the server side, for development in server side. V8 engine is the javascript engine, and NodeJS use it to parse and runs Javascript.</p>
            </div>
            <div className='my-3'>
                <h3>2. Differences between sql and nosql databases?</h3>
                <h5>SQL</h5>
                <p>SQL is database management system. And It is a relational databases. These databases have fixed or static or predefined schema. These databases are not suited for ranked data storage.These databases are best suited for complex queries. Follows ACID property, which means (Atomicity, Consistency, Isolation, Durability) refers to a standard set of properties that guarantee database transactions are processed reliably.</p>
                <h5>NoSQL</h5>
                <p>NoSQL is also a database management system. It is a non-relational database system. NoSQL has a  dynamic schema. These databases are best suited for ranked data storage. These database is suitable for simple queries. Horizontally scalable. Follows CAP(consistency, availability, partition tolerance) refers to a standard set of properties that guarantee database transactions are processed reliably.</p>
            </div>
            <div className='my-3'>
                <h3>3. What is the purpose of jwt and how does it work?</h3>
                <p>In the example of JWT, there is a client and a server. The Clients wants to access some protected data on our server, But the server don't know who is our client. That's why the server can't trust anybody, who enter our server. That's why the server only wan'ts to give data to the trustworthy client. So our client sends a request to our server along with data to verify who it is. When a user enter our server, user's data was accepted as valid by the server. The server create a token. This token is return to the client and it's up to the client to store this data and send it along as required for any request to the server. The next time our client makes a request along a secure route, it does just that. It sends along the jwt token. But our server knows not to trust the client, because clients can not be trusted. So our server verifies this token is who it says it's from and that is hasn't been tampered with. If everything checks out like it does in our example, the server sends back a response with the request data and everybody lives happily ever after.</p>
            </div>

        </div>
    )
}

export default Blogs