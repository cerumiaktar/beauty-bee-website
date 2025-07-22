import { FaFacebookF,FaInstagram, FaYoutube } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="mt-16 bg-[#D42C7C]">
            <footer className="footer sm:footer-horizontal container mx-auto p-10">
                <aside>
                    <img className="w-64" src="https://i.ibb.co/zTJSHRX5/Beauty-Bee-01-1.png" alt="" />
                    <p className="text-[#dfdfdf]">
                        Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod temporb <br /> incididunt ut labore.
                    </p>
                </aside>
                <nav>
                    <h6 className="text-lg font-bold text-white">Contact</h6>
                    <a className="link link-hover text-[#dfdfdf]">Address: Dhaka, Bangladesh</a>
                    <a className="link link-hover text-[#dfdfdf]">Phone: +8801312345678</a>
                    <a className="link link-hover text-[#dfdfdf]">Email: info@skincare.com</a>
                </nav>
                <nav>
                    <h6 className="text-lg font-bold text-white">Useful Link</h6>
                    <a className="link link-hover text-[#dfdfdf]">Privacy Policy</a>
                    <a className="link link-hover text-[#dfdfdf]">Terms and Condition</a>
                    <a className="link link-hover text-[#dfdfdf]">FAQ</a>
                </nav>
                <nav>
                    <h6 className="text-lg font-bold text-white">Follow Us</h6>
                    <a className="link link-hover text-[#dfdfdf] flex items-center gap-2"><FaFacebookF />Facebook</a>
                    <a className="link link-hover text-[#dfdfdf] flex items-center gap-2"><FaInstagram /> Instagram</a>
                    <a className="link link-hover text-[#dfdfdf] flex items-center gap-2"><FaYoutube />Youtube</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;