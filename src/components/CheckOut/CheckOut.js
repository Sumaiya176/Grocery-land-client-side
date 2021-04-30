import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { checkOutContext, productContext, userContext } from '../../App';
import { useHistory, useParams } from 'react-router';
import './CheckOut.css';

const CheckOut = () => {
    const [products, setProducts] = useContext(productContext);
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    const [checkOut, setCheckOut] = useContext(checkOutContext);
    const { id } = useParams()
    
    useEffect(() => {
        fetch('https://quiet-waters-97893.herokuapp.com/product/' + id)
            .then(res => res.json())
            .then(data => setCheckOut(data))
    }, [id])

    const { _id } = checkOut;
    const history = useHistory();
    const handlePlaceOrder = (id) => {
        const newData = {...checkOut,...loggedInUser, date: new Date()}
        //console.log(newData);

        const url = `https://quiet-waters-97893.herokuapp.com/addItem`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
        .then(res => console.log('server side response', res))   

        history.push(`/order/${_id}`);
        
    }
    
    return (
        <div>
            <div>
                <h2 className="check-out">CheckOut</h2>
                <div className="check-box">
                    <div>
                        <p className="header">Description</p>
                        <h5 className="header">{checkOut.name}</h5>
                        <h6>Total</h6>
                    </div>
                    <div>
                        <p className="header">Quantity</p>
                        <h5 className="header">1</h5>
                        <h6>1</h6>
                    </div>
                    <div>
                        <p className="header">Price</p>
                        <h5 className="header">{checkOut.price}</h5>
                        <h6>{checkOut.price}</h6>
                    </div>
                </div>
            </div>
            <button onClick={() => handlePlaceOrder(_id)} className="btn btn-success check-out">Place Order</button>
        </div>
    );
};

export default CheckOut;