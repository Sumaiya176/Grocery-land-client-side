import React, { useEffect } from 'react';
import { useContext } from 'react';
//import Header from '../Header/Header';
import Products from '../Products/Products';
import { productContext } from '../../App';

// const products = [
//     {
//         name: 'rice',
//         pic: 'image 35.png'
//     },
//     {
//         name: 'Bay leaves',
//         pic: 'image 33.png'
//     },
//     {
//         name: 'Ruchi Chanachur',
//         pic: 'image 39.png'
//     },
//     {
//         name: 'Marks Powder Milk',
//         pic: 'image 32.png'
//     },
//     {
//         name: 'Chips',
//         pic: 'image 37.png'
//     },
//     {
//         name: 'Onion',
//         pic: 'image 34.png'
//     }
// ]

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
            {/* <Header></Header> */}
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