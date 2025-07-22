
import Banner2 from "../Banner2/Banner2";
import Brands from "../Brands/Brands";
import Categories from "../Categories/Categories";
import DiscountedProducts from "../DiscountedProducts/DiscountedProducts";
import Faq from "../Faq/Faq";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import OfferBanner from "../OfferBanner/OfferBanner";
import Reviews from "../Reviews/Reviews";


const Home = () => {
    return (
        <div>
            {/* <Banner></Banner> */}
            <Banner2></Banner2>
            <Categories></Categories>
            <FeaturedProducts></FeaturedProducts>
            <OfferBanner></OfferBanner>
            <DiscountedProducts></DiscountedProducts>
            <Reviews></Reviews>
            <Brands></Brands>
            <Faq></Faq>
        </div>
    );
};

export default Home;