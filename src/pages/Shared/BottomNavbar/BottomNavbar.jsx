
import { NavLink } from 'react-router-dom';

const BottomNavbar = () => {
    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar container mx-auto">
                <div className="navbar-center">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 text-lg shadow">
                            <li><NavLink to='/' className={({ isActive }) => isActive ? "text-[#D42C7C] font-medium" : "text-black"}>Home</NavLink></li>
                            <li>
                                <a><NavLink to='/categories'>Categories</NavLink></a>
                                <ul className="p-2">
                                    <li><NavLink to='/categories/skincare'>Skin Care</NavLink></li>
                                    <li><NavLink to='/categories/haircare'>Hair Care</NavLink></li>
                                    <li><NavLink to='/categories/bodycare'>Body Care</NavLink></li>
                                    <li><NavLink to='/categories/Combo'>Combo</NavLink></li>
                                    <li><NavLink to='/categories/babycare'>Baby Care</NavLink></li>
                                </ul>
                            </li>
                            <li><NavLink to='/shop'>Shop</NavLink></li>
                            <li><NavLink to='/allProducts'>All Products</NavLink></li>
                            <li><NavLink to='/allBrands'>All Brands</NavLink></li>
                            <li><NavLink to='/contact'>Contact</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center ml-96 hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        <li><NavLink to='/' className={({ isActive }) => isActive ? "text-[#D42C7C] font-medium" : "text-black"}>Home</NavLink></li>
                        <li className="relative">
                            <details>
                                <summary><NavLink to='/categories'>Categories</NavLink></summary>
                                <ul className="p-2 absolute bg-base-100 shadow-lg z-50 rounded">
                                    <li><NavLink to='/categories/skincare'>Skin Care</NavLink></li>
                                    <li><NavLink to='/categories/haircare'>Hair Care</NavLink></li>
                                    <li><NavLink to='/categories/bodycare'>Body Care</NavLink></li>
                                    <li><NavLink to='/categories/Combo'>Combo</NavLink></li>
                                    <li><NavLink to='/categories/babycare'>Baby Care</NavLink></li>
                                </ul>
                            </details>
                        </li>
                        <li><NavLink to='/shop'>Shop</NavLink></li>
                        <li><NavLink to='/allProducts'>All Products</NavLink></li>
                        <li><NavLink to='/allBrands'>All Brands</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default BottomNavbar;