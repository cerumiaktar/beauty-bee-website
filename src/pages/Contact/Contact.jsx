
import { MdCall, MdEmail, MdLocationOn } from "react-icons/md";

const Contact = () => {
    return (
        <div className="mt-16">
            <div className="container mx-auto mb-16">
                <h1 className="text-3xl font-bold text-center mb-6 dark:text-black">Contact Us</h1>
                <div className="flex flex-col md:flex-row gap-6 border border-[#FFCFE6] rounded-2xl p-12">
                    <div className="md:w-6/12">
                        <div className="card-body">
                            <h1 className="text-3xl text-black font-bold">Send a Message</h1>
                            <fieldset className="fieldset space-y-2">
                                <label className="label">Email</label>
                                <input type="email" className="input md:w-full dark:text-black dark:bg-white dark:border dark:border-[#8d8d8d]" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" className="input md:w-full dark:text-black dark:bg-white dark:border dark:border-[#8d8d8d]" placeholder="Password" />
                                <textarea className="textarea md:w-full dark:text-black dark:bg-white dark:border dark:border-[#8d8d8d]" placeholder="Type a Message"></textarea>
                                <button className="btn bg-[#D42C7C] text-white mt-4 dark:border-none">Submit</button>
                            </fieldset>
                        </div>
                    </div>
                    <div className="md:w-6/12">
                        <div
                            className="hero h-full rounded-2xl"
                            style={{
                                backgroundImage:
                                    "url(https://i.ibb.co/Xr5JwjT2/Group-7.png)",
                            }}
                        >
                            <div className="overlay-[#D42C7C] rounded-2xl"></div>
                            <div className="hero-content text-neutral-content text-center">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-3xl font-bold">Get in Touch</h1>
                                    <p className="mb-5 flex items-center gap-2"><span><MdLocationOn /></span>Address: Dhaka Bangladesh</p>
                                    <p className="mb-5 flex items-center gap-2"><span><MdCall /></span>Phone: +8801323456789</p>
                                    <p className="mb-5 flex items-center gap-2"><span><MdEmail /></span>Email: info@skicare.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img className="w-full h-[400px]" src="https://i.ibb.co/Xk75Nmrq/Rectangle-5-2.png" alt="" />
            </div>
        </div>
    );
};

export default Contact;