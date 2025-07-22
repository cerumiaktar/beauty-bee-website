import { useEffect, useState } from "react";
import Category from "./Category";


const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        fetch('categories.json')
        .then(res => res.json())
        .then(data =>setCategories(data))
    } ,[])
    return (
        <div className="container mx-auto mt-16">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">Categories</h1>
                <p>See all</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
                {
                    categories.map((category) =><Category category = {category}></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;