import React from 'react';
import { useHistory } from 'react-router';
import './Products.css';

const Products = ({ product }) => {

    const { name, price, _id } = product;
    const history = useHistory();
    const handleCheckOut = (id) => {
        history.push(`/checkout/${_id}`);
    }

    return (
        
        
        <div className="col-md-3 card-box">
        <img className="img" src={product.imageURL} alt=""></img>
       <div>
            <h6 className="pro-name">{name}</h6>
            <div className="price-button">
            <h3 className="price">{price}</h3>
            <button onClick={() => handleCheckOut(_id)} className="buy-button">Buy now</button>
            </div>

       </div>
     </div>
    );
};

export default Products;

// onClick={handleCheckOut(_id)}

         
       


      