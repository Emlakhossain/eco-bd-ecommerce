import React from 'react';
import './Crockery.css';

const Crockery = ({ crockery, setCrockerys }) => {
    const { id, name, img, price, discount } = crockery;
    return (
        <div className='card-body mx-2'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='text-start'>
                <h2>{name}</h2>
                <p>Price: {price}</p>
                <p>Discount: {discount}</p>
            </div>
            <button className='btn btn-warning mt-4'>Go To Purchase</button>
        </div>
    );
};

export default Crockery;