import React from 'react';
import './Crockery.css';

const Crockery = ({ crockery, setCrockerys }) => {
    const { id, name, img, price, discount } = crockery;
    return (
        <div>
            <div class="card w-auto bg-base-100  mx-4 h-68 container hover:outline p-2">
                <figure><img he={200} src={img} alt="img" className='img bg-gray-400' /></figure>
                <div class="card-body text-start">
                    <h2 class=" text-start">
                        {name}

                    </h2>
                    <p>Price BDT: {price}</p>
                    <p className='text-warning'>Discount %:{discount}</p>

                    <button className='btn bg-lime-300 border-0 mt-6 w-3/4 mx-auto'>Progress</button>
                </div>

            </div>
        </div>
    );
};

export default Crockery;