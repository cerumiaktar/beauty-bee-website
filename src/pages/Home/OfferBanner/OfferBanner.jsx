import Marquee from "react-fast-marquee";

const OfferBanner = () => {
    return (
        <div className="container mx-auto mt-16">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">Explore More Product</h1>
                <p>See all</p>
            </div>
            <Marquee>
                <img src="https://i.ibb.co/21cGrphf/1-3.png" alt="" />
                <img className="ml-8 mr-8" src="https://i.ibb.co/XrcjTgnj/2-2.png" alt="" />
                <img src="https://i.ibb.co/QjnLc3Bb/3-2.png" alt="" />
                <img className="ml-8 mr-8" src="https://i.ibb.co/ZppXfWsp/b-4.png" alt="" />
            </Marquee>
        </div>
    );
};

export default OfferBanner;