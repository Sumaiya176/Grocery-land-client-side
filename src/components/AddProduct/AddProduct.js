import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddProduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBorderAll, faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const AddProduct = () => {

    const { register, handleSubmit, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);


    const onSubmit = data => {
        const productData = {
            name: data.name,
            price: data.price,
            weight: data.weight,
            imageURL: imageURL
        }
        //console.log(data)
         const url = `https://quiet-waters-97893.herokuapp.com/addProduct`;
        console.log(productData);
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
        .then(res => console.log('server side response', res))
    }; 
    const handleImageUpload = event => {
        console.log(event.target.files[0])
        const imageData = new FormData()
        imageData.set('key', '297abeb5fd5e0e20c0c4d92713367a68')
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
         console.log(response.data.data.display_url)
          })
          .catch(function (error) {
            console.log(error);
          });
    } 

    return (
        <div className="add-product-box">
            <div className="side-bar">
                <h2 className="side-nav">Grocery Land</h2>
                <h6 className="side-nav"><FontAwesomeIcon icon={faBorderAll} />{' '}Manage Product</h6>
                <h6 className="side-nav"><FontAwesomeIcon icon={faPlus} />{' '}Add Product</h6>
                <h6 className="side-nav"><FontAwesomeIcon icon={faPen} />{' '}Edit Product</h6>
            </div>
            <div className="add-product-section">
                <h4>Add product</h4>
               <div className="product-detail">
               <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form">
                        <div className="product-box">
                            <div>
                                <h6>Name</h6>
                                <input name="name" defaultValue="Product name" ref={register} />
                            </div>
                            <div>
                                <h6>Price</h6>
                                {/* <input name="Add Product" type="text" placeholder="Product price"/> */}
                                <input name="price" defaultValue="Product price" ref={register} />
                            </div>
                        </div>
                        <div>
                            <div>
                                <h6>Weight</h6>
                                {/* <input name="Add Product" type="text" placeholder="Product weight"/> */}
                                <input name="weight" defaultValue="Product weight" ref={register} />
                            </div>
                            <div>
                                <h6>Image</h6>
                                {/* <input name="Add Product" type="file" onChange={handleImageUpload} placeholder="Product image"/> */}
                                <input name="exampleRequired" type="file" onChange={handleImageUpload} />
                            </div>
                        </div>
                    </div>
                    {errors.exampleRequired && <span>This field is required</span>}
                    {/* <button className="btn btn-primary button" type="submit">Save </button> */}
                    <input type="Submit" />
                </form>
               </div>
            </div>
        </div>
    );
};

export default AddProduct;