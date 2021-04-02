import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";


const Header = () => {
    return (
            <div>
               <div className="header-header">
    <nav>
        <ul>
            <li className="logo"><a className="alogo" href="#">GROCERY LAND</a></li>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/addproduct">Add product</Link></li>
            <li><Link to="/order">Order</Link></li>
            <li><Link to="/admin">Admin</Link></li>
            <button><Link to="/login">Log in</Link></button>

        </ul>
    </nav>
</div>
            </div>
    );
};

export default Header;



