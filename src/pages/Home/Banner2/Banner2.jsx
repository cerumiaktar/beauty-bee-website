import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';

import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Banner2 = () => {
    return (
        <div>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide className='relative'>
                    <div className='absolute inset-y-0 md:left-56 left-6 top-30 md:top-50 text-left'>
                        <h1 className='text-2xl md:text-5xl font-extrabold mb-2 md:mb-8 dark:text-black'>BLACK FRIDAY <span className='text-[#D42C7C]'>SALE</span></h1>
                        <Link to="/shop"><button className='btn border-[#D42C7C] text-[#D42C7C] md:text-lg hover:bg-[#D42C7C] dark:bg-white hover:text-white'>Shop Now</button></Link>
                    </div>
                    <img src="https://i.ibb.co/Cs99HrX2/Frame-12-2.png" alt="" />
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <div className='absolute inset-y-0 md:left-56 left-6 top-30 md:top-50 text-left'>
                        <h1 className='text-2xl md:text-5xl font-extrabold mb-2 md:mb-8 dark:text-black'>BLACK FRIDAY <span className='text-[#D42C7C]'>SALE</span></h1>
                        <button className='btn border-[#D42C7C] text-[#D42C7C] md:text-lg hover:bg-[#D42C7C] dark:bg-white hover:text-white'>Shop Now</button>
                    </div>
                    <img src="https://i.ibb.co/C34W09vC/Frame-12-1.png" alt="" />
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <div className='absolute inset-y-0 md:left-56 left-6 top-30 md:top-50 text-left'>
                        <h1 className='text-2xl md:text-5xl font-extrabold mb-2 md:mb-8 dark:text-black'>BLACK FRIDAY <span className='text-[#D42C7C]'>SALE</span></h1>
                        <button className='btn border-[#D42C7C] text-[#D42C7C] md:text-lg hover:bg-[#D42C7C] dark:bg-white hover:text-white'>Shop Now</button>
                    </div>
                    <img src="https://i.ibb.co/qM9NBbSC/Rectangle-1.png" alt="" />
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <div className='absolute inset-y-0 md:left-56 left-6 top-30 md:top-50 text-left'>
                        <h1 className='text-2xl md:text-5xl font-extrabold mb-2 md:mb-8 dark:text-black'>BLACK FRIDAY <span className='text-[#D42C7C]'>SALE</span></h1>
                        <button className='btn border-[#D42C7C] text-[#D42C7C] md:text-lg hover:bg-[#D42C7C] dark:bg-white hover:text-white'>Shop Now</button>
                    </div>
                    <img src="https://i.ibb.co/TxKFB4D3/Frame-12.png" alt="" />
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner2;