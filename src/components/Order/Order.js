import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { checkOutContext } from '../../App';
import './Order.css';

const Order = () => {

    const [checkOut, setCheckOut] = useContext(checkOutContext)
    const [Order, setOrder] = useState([])
    console.log(checkOut)
    

    return (
        <div className="ordered-product">
            <img className="img" src={checkOut.imageURL} alt="" />
            <h4>Product name: {checkOut.name}</h4>
            <h6>Weight: {checkOut.weight}</h6>
            <h5>Price: {checkOut.price}</h5>
        </div>
    ); 
};

export default Order;