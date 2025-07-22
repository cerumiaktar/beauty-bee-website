import { LuUserRound, LuSearch } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
    return (
        <div className="bg-base-100 dark:bg-white shadow-sm">
            <div className="navbar container mx-auto">
                <div className="navbar-start md:w-4/12">
                    <img src="https://i.ibb.co/PG26n9vg/fav-icon.png" className="block md:hidden w-14" alt="" />
                    <a className="w-52 hidden md:block"><img src="https://i.ibb.co/7HsgTdL/Beauty-Bee-01.png" alt="logo" /></a>
                </div>
                <div className="join md:w-4/12 hidden md:flex">  
                    <input className="input join-item border-[#D42C7C] dark:bg-white dark:text-[#333333] w-full focus:outline-none" placeholder="Search your favorite product" />
                    <button className="btn join-item bg-[#D42C7C] dark:bg-[#D42C7C] dark:border-none text-white"><IoSearch /></button>
                </div>
                <div className="navbar-end gap-4 md:w-4/12">
                    {/* mobile ver */}
                    <a className="btn text-[#D42C7C] border-[#D42C7C] hover:bg-[#D42C7C] hover:text-white md:text-base md:hidden dark:bg-white"><span><LuSearch /></span>Search</a>
                    {/* Web version */}
                    <a className="btn text-[#D42C7C] dark:bg-white border-[#D42C7C] hover:bg-[#D42C7C] hover:text-white md:text-base"><span><LuUserRound /></span>Login</a>
                    <a className="btn text-[#D42C7C] dark:bg-white border-[#D42C7C] hover:bg-[#D42C7C] hover:text-white md:text-base"><span><FiShoppingCart /></span>Cart</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;