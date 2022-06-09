import React from 'react';
import './Testimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import profilePic1 from '../../img/profile1.jpg';
import profilePic2 from '../../img/profile2.jpg';
import profilePic3 from '../../img/profile3.jpg';
import profilePic4 from '../../img/profile4.jpg';
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';


const Testimonial = () => {
    const clients = [
        {
            img: profilePic1,
            reviww: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis earum itaque eligendi veniam, provident sapiente! Voluptatibus tempore ipsa quos minima saepe. '
        },
        {
            img: profilePic2,
            reviww: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis earum itaque eligendi veniam, provident sapiente! Voluptatibus tempore ipsa quos minima saepe. '
        },
        {
            img: profilePic3,
            reviww: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis earum itaque eligendi veniam, provident sapiente! Voluptatibus tempore ipsa quos minima saepe. '
        },
        {
            img: profilePic4,
            reviww: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis earum itaque eligendi veniam, provident sapiente! Voluptatibus tempore ipsa quos minima saepe. '
        }
    ]
    return (
        <div className='t-wrappper' id='Testimonial'>
            <div className="t-heading">
                <span>Clients always Get</span>
                <span>Exceptional Work </span>
                <span>From me...</span>
                <div className="blur t-blur1" style={{ background: 'var(--purple' }}></div>
                <div className="blur t-blur2" style={{ background: 'skyblue' }}></div>

            </div>
            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {
                    clients.map((client, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="testimonial">
                                    <img src={client.img} alt="" />
                                    <span>{client?.reviww}</span>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

        </div>
    );
};

export default Testimonial;