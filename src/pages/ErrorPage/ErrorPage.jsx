import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="container mx-auto">
            <img className="mx-auto mt-36 mb-16" src="https://i.ibb.co/hx6gnPSw/Frame-removebg-preview.png" alt="" />
            <div className="text-center">
                <Link to='/'>
                    <button className="btn bg-[#D83888] text-white">Go Back to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;