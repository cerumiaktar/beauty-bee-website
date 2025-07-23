import { FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllProduct = ({ allproducts }) => {
    const {id, img, title, rating, price } = allproducts;
    return (
        <div>
            <div className="card bg-base-100 dark:bg-white dark:text-black h-full shadow-sm border border-gray-200">
                <figure>
                    <img className="w-full"
                        src={img}
                        alt="Shoes" />
                </figure>
                <div className="card-body text-center">
                    <h2 className="card-title mx-auto">{title}</h2>
                    <span className="text-lg text-[#F96001]">{rating}</span>
                    <p className="text-xl font-bold">{price}</p>
                    <Link className="md:w-full" to={`/product/${id}`}>
                        <button className="btn bg-[#D42C7C] dark:border-none hover:bg-[#7C2C8C] text-white md:w-full"><span><FaShoppingBasket /></span>Add to Cart</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllProduct;