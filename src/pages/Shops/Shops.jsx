import React, { useEffect, useState } from 'react';
import Shop from './Shop';

const Shops = () => {
    const [shops, setShops] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setShops(data))
    }, [])
    return (
        <div className='container mx-auto mt-16 mb-16'>
            <h1 className="text-2xl font-bold text-center mb-6 dark:text-black">All Products</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {
                    shops.map((shop) => <Shop shop={shop}></Shop>)
                }
            </div>
            <div className='text-center mt-8'>
                <button className='btn border border-[#D42C7C] text-[#D42C7C] dark:bg-white'>Load More</button>
            </div>
        </div>
    );
};

export default Shops;