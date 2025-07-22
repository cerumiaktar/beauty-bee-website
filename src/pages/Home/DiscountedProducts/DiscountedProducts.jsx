import { useEffect, useState } from "react";
import DiscountedProduct from "./DiscountedProduct";


const DiscountedProducts = () => {
    const [discountedProducts, setDiscountedProducts] = useState([]);

    useEffect(() =>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data =>setDiscountedProducts(data))

    } ,[])
    return (
        <div className="container mx-auto mt-16">
            <div className="flex items-center justify-between mb-6 dark:text-black">
                <h1 className="text-2xl font-bold">Discounted Products</h1>
                <p>See all</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {
                    discountedProducts.map((discount) =><DiscountedProduct discount = {discount}></DiscountedProduct>)
                }
            </div>
        </div>
    );
};

export default DiscountedProducts;