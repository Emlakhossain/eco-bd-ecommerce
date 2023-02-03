import React from 'react';
import './Catagory.css';
import transport from '../../images/transport.png';
import eco from '../../images/logo.jpg';

const catagory = () => {
    return (
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center my-10 mx-auto'>
            <div className='flex items-center gap-4 font-bold hover:cursor-pointer hover:outline hover:rounded-full hover:shadow-2xl p-4 hover:text-warning'>
                <div>
                    <img src={transport} alt="" />
                </div>
                <div>
                    <h4>Free Delivery</h4>
                </div>
            </div>
            <div className='flex items-center gap-4 font-bold hover:cursor-pointer hover:outline hover:rounded-full hover:shadow-2xl p-4 hover:text-warning'>
                <div>
                    <img src={eco} alt="" />
                </div>
                <div>
                    <h4>ECO Products</h4>
                </div>
            </div>
            <div className='flex items-center gap-4 font-bold hover:cursor-pointer hover:outline hover:rounded-full hover:shadow-2xl p-4 hover:text-warning'>
                <div>
                    <img src={transport} alt="" />
                </div>
                <div>
                    <h4>Paper Packaging</h4>
                </div>
            </div>
            <div className='flex items-center gap-4 font-bold hover:cursor-pointer hover:outline hover:rounded-full hover:shadow-2xl p-4 hover:text-warning'>
                <div>
                    <img src={transport} alt="" />
                </div>
                <div>
                    <h4>MUD POT Items</h4>
                </div>
            </div>

        </div>
    );
};

export default catagory;