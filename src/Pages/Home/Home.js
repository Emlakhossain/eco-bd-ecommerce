import React from 'react';
import Banner from '../Banner/Banner';
import Crockerys from '../Crockery/Crockerys';
import Catagory from '../Catagory/Catagory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Catagory></Catagory>
            <Crockerys></Crockerys>
        </div>
    );
};

export default Home;