import { Link } from "react-router-dom";


const Register = () => {
    return (
        <div>
            <div className="hero bg-base-200 dark:bg-white dark:text-black min-h-screen ">
                <div className="hero-content md:w-4/12 flex-col lg:flex-row-reverse">
                    <div className="card w-full shrink-0 shadow-2xl">
                        <div className="card-body w-full">
                            <div className="text-center">
                                <h1 className="text-3xl font-bold">Register now</h1>
                            </div>
                            <fieldset className="fieldset space-y-2">
                                <label className="label">Name</label>
                                <input type="name" className="input md:w-full dark:bg-white dark:border dark:border-[#8d8d8d]" placeholder="name" />
                                <label className="label">Email</label>
                                <input type="email" className="input md:w-full dark:bg-white dark:border dark:border-[#8d8d8d]" placeholder="Email" />
                                <label className="label">Phone Number</label>
                                <input type="text" className="input md:w-full dark:bg-white dark:border dark:border-[#8d8d8d]" placeholder="Phone Number" />
                                <label className="label">Password</label>
                                <input type="password" className="input md:w-full dark:bg-white dark:border dark:border-[#8d8d8d]" placeholder="Password" />
                                <label className="label">Confirm Password</label>
                                <input type="password" className="input md:w-full dark:bg-white dark:border dark:border-[#8d8d8d]" placeholder="Confirm Password" />
                                <button className="btn bg-[#D42C7C] mt-4 dark:border-none text-white">Register</button>
                            </fieldset>
                            <p className='text-center'>You have an account? <Link to='/login' className='font-bold text-[#D42C7C]'>login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;