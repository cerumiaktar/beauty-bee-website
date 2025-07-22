import { useEffect, useState } from "react";
import Brand from "./Brand";
import Marquee from "react-fast-marquee";


const Brands = () => {

    const [brands, setBrands] = useState([]);

    useEffect(() =>{
        fetch('brands.json')
        .then(res=>res.json())
        .then(data=>setBrands(data))
    } ,[])
    return (
        <div className="container mx-auto mt-16">
            <h1 className="text-2xl font-bold text-center mb-6">Popular Brands</h1>
            <Marquee pauseOnHover={true} className="grid md:grid-cols-4">
                {
                    brands.map((brand) =><Brand brand ={brand}></Brand>)
                }
            </Marquee>
        </div>
    );
};

export default Brands;