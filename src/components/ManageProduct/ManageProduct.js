import React from 'react';

const ManageProduct = ({book}) => {

    const {_id} = book;
    console.log(_id);
    const handleDelete = (id) => {
        console.log(id);
        fetch(`https://quiet-waters-97893.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then( result => {
            console.log('deleted successfully')
        })
}


    return (
        <div>
            <h6>{book.name}</h6>
            <button onClick={() => handleDelete(_id)}>Delete</button>
        </div>
    );
};

export default ManageProduct;