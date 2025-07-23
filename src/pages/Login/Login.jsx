import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="hero bg-base-200 dark:bg-white dark:text-black min-h-screen">
                <div className="hero-content md:w-4/12 flex-col lg:flex-row-reverse">
                    <div className="card w-full shrink-0 shadow-2xl">
                        <div className="card-body w-full">
                            <div className="text-center">
                                <h1 className="text-4xl font-bold">Login now!</h1>
                            </div>
                            <fieldset className="fieldset space-y-2">
                                <label className="label">Email</label>
                                <input type="email" className="input md:w-full dark:bg-white dark:border dark:border-[#8d8d8d]" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" className="input md:w-full dark:bg-white dark:border dark:border-[#8d8d8d]" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn bg-[#D42C7C] mt-4 text-white dark:border-none">Login</button>
                            </fieldset>
                            <p className='text-center'>If you don't have any account? <Link to='/register' className='font-bold text-[#D42C7C]'>Register</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;