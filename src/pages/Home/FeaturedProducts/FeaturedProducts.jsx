import { useEffect, useState } from "react";
import FeaturedProduct from "./FeaturedProduct";


const FeaturedProducts = () => {

    const [featuredProducts, setFeaturedProducts] = useState([]);

    useEffect(() =>{
        fetch('products.json')
        .then(res =>res.json())
        .then(data=>setFeaturedProducts(data))
    } ,[])
    return (
        <div className="container mx-auto mt-16">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">Featured Products</h1>
                <p>See all</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {
                    featuredProducts.map((featuredProduct) =><FeaturedProduct featuredProduct = {featuredProduct}></FeaturedProduct>)
                }
            </div>
        </div>
    );
};

export default FeaturedProducts;