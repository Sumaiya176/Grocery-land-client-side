import React, { useEffect, useState } from 'react';
import ManageProduct from '../ManageProduct/ManageProduct';
import './Admin.css';

const Admin = () => {
    const [bookedPd, setBookedPd] = useState([])
    useEffect(() => {
        fetch('https://quiet-waters-97893.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setBookedPd(data)
            })
    }, [bookedPd.length])
    return (
        <div>
            <h2>Manage Product</h2>
            <div className="admin">
                <div>
                    <p>Product Name</p>
                    <div>
                {
                    bookedPd.map(book => <ManageProduct book={book} key={book._id}></ManageProduct>)
                }
            </div>
                </div>
                <div>
                    <p>Price</p>
                </div>
                <div>
                    <p>Action</p>
                </div>
            </div>
           
        </div>
    );
};

export default Admin;