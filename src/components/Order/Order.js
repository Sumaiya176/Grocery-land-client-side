import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { checkOutContext } from '../../App';
import './Order.css';

const Order = () => {
    // const [checkOut, setCheckOut] = useContext(checkOutContext)
    // const [Order, setOrder] = useState([])
    // const { id } = useParams()
    // const {_id} = checkOut;
    // console.log(_id);
    // // useEffect(() => {
    // //     fetch(`https://quiet-waters-97893.herokuapp.com/item/' + id`)
    // //         .then(res => res.json())
    // //         .then(data => console.log(data))
    // // }, [id])


    return (
        <div>
            <h1 className="title">Your Order is successful</h1>
            <h3></h3>
        </div>
    ); 
};

export default Order;