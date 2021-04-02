import React, { useEffect } from 'react';
import { useContext } from 'react';
import Products from '../Products/Products';
import { productContext } from '../../App';



const Home = () => {

    const [products, setProducts] = useContext(productContext);
    useEffect(() => {
        fetch('https://quiet-waters-97893.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                //console.log(data)
            })
    }, [])

    return (
        <div>
            <div className="row justify-content-center">
                {
                    products.length === 0 &&
                    <div className="spinner-border text-dark" role="status">
                        <span className="sr-only"></span>
                    </div>
                }
                {
                    products.map(product => <Products product={product} key={product._id}></Products>)
                }
            </div>
        </div>
    );
};

export default Home;