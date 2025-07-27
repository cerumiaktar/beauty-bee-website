import { FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";

const DiscountedProduct = ({ discount }) => {
    const { id, img, title, rating, price, offer } = discount;
    return (
        <div className="">
            <Link to={`/product/${id}`}>
                <div className="card bg-base-100 h-full shadow-sm border border-gray-200 dark:bg-white dark:text-black">
                    <figure className="relative">
                        <div className="badge bg-red-700 border-none text-white font-bold p-4 absolute top-4 left-4">{offer} OFF</div>
                        <img className="w-full"
                            src={img}
                            alt="Discounted Product Image" />
                    </figure>
                    <div className="card-body text-center">
                        <h2 className="card-title mx-auto">{title}</h2>
                        <span className="text-lg text-[#F96001]">{rating}</span>
                        <p className="text-xl font-bold">{price}</p>
                        <div className="card-actions">
                            <button className="btn bg-[#D42C7C] dark:border-none hover:bg-[#7C2C8C] text-white md:w-full"><span><FaShoppingBasket /></span>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default DiscountedProduct;