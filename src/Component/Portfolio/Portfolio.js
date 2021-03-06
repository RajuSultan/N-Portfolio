import React from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Sideber from '../../img/sidebar.png';
import ecommerce from '../../img/ecommerce.png';
import hoc from '../../img/hoc.png';
import musicapp from '../../img/musicapp.png';
import 'swiper/css'
const Portfolio = () => {
    return (
        <div className='portfolio' id='Portfolio'>
            <span>Resent Projects</span>
            <span>Portfolio</span>

            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                grabCursor={true}
                className='portfolio-slider'
            >
                <SwiperSlide>
                    <img src={Sideber} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={ecommerce} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={musicapp} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={hoc} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Portfolio;