import { useLoaderData, useParams } from "react-router-dom";
import { HiPlus, HiMinus } from "react-icons/hi";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import Description from "./Description";

const ProductDetails = () => {
    const products = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const product = products.find((product) => product.id === idInt)
    console.log(product, id);

    const [quantity, setquantity] = useState(1)

    const increment = () => {
        setquantity(prev => prev + 1)
    }

    const decrement = () => {
        if (quantity > 1) {
            setquantity(prev => prev - 1)
        }
    };

    const handleToast = () =>{
        toast("Product Add to Cart Successfully");
    }


    return (
        <div className="container mx-auto mt-12">
            <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-6/12">
                    <img className="w-full rounded-lg" src={product.img} alt="" />
                </div>
                <div className="md:w-6/12 ">
                    <div className=" bg-base-100 dark:bg-white dark:text-black md:h-full card-md shadow-sm">
                        <div className="card-body space-y-4">
                            <h2 className="text-3xl font-bold">{product.title}</h2>
                            <p className="text-2xl font-bold">Price: {product.price}</p>
                            <p className="text-lg">Category: {product.category}</p>
                            <p className="text-xl text-[#F96001]">{product.rating}</p>
                            <div className="flex items-center gap-2 w-1/6">
                                <p className="text-lg">Quantity:</p>
                                <div className="text-lg flex items-center rounded gap-3 bg-white border px-4">
                                    <span onClick={increment}><HiPlus /></span>
                                    <p>{quantity}</p>
                                    <span onClick={decrement}><HiMinus /></span>
                                </div>
                            </div>
                            <div className="space-x-4">
                                <button onClick={handleToast} className="btn bg-[#D42C7C] text-white dark:border-none">Add to Cart</button>
                                <button className="btn bg-[#7C2C8C] text-white dark:border-none">Buy Now</button>
                            </div>
                            <div className="bg-[#fdf2f8] p-4 rounded-lg space-y-2">
                                <p>ঢাকা সিটির বাহির	১৩০ টাকা</p>
                                <p>ঢাকা সিটির ভিতর	৬০ টাকা</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
            <Description></Description>
        </div>
    );
};

export default ProductDetails;