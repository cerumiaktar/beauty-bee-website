import { useEffect, useState } from "react";
import Review from "./Review";


const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() =>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(data =>setReviews(data))
    } ,[])
    return (
        <div className="container mx-auto mt-16">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">Client Reviews</h1>
                <p>See all</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    reviews.map((review) =><Review review ={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;