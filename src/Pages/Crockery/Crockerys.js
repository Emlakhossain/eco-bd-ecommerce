import React, { useEffect, useState } from 'react';
import Crockery from './Crockery';

const Crockerys = () => {
    const [crockerys, setCrockerys] = useState([]);

    useEffect(() => {
        fetch('crockery.json')
            .then(res => res.json())
            .then(data => setCrockerys(data))
    })

    return (
        <div>
            <h2 className='font-bold text-start text-2xl ml-5 mt-10'>Just For You</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto my-20 ' >
                {
                    crockerys.map(crockery => <Crockery
                        key={crockery._id}
                        crockery={crockery}
                        setCrockerys={setCrockerys}
                    ></Crockery>)
                }
            </div>
        </div>
    );
};

export default Crockerys;