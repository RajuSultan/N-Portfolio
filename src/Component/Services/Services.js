import React from 'react';
import './Services.css';
import HeartEmoji from '../../img/heartemoji1.png';
import Humble from '../../img/humble.png';
import Glasses from '../../img/glasses.png';
import Service from './Service/Service';
import CV from './MD_Sultan Web_Developer.pdf';
import { motion } from 'framer-motion';


const Services = () => {
    const transition = { duration: 1, type: "spring" }

    return (
        <div className='services' id='Services'>
            <div className='awesome'>
                <span>My Awesome</span>
                <span>services</span>
                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, soluta. <br />
                    Lorem ipsum dolor sit amet.</span>
                <a href={CV} download>
                    <button className='button s-button'>Download CV</button></a>

                <div className='blur s-blur1' style={{ background: '#ABF1FF94' }}></div>
            </div>
            <div className='cards'>
                <motion.div
                    // initial={{ left: '14rem' }}
                    // whileInView={{ left: '25%' }}
                    // transition={transition}
                    style={{ left: '14rem' }}>
                    <Service
                        emoji={HeartEmoji}
                        heading={'Design'}
                        detail={"figma, Sketch, Photoshop, Adobe, Adobexd"}
                    />
                </motion.div>
                <motion.div style={{ left: '-4rem', top: '12rem' }}>
                    <Service
                        emoji={Glasses}
                        heading={'Developer'}
                        detail={"HTML, Css, JavaScript, React"}
                    />
                </motion.div>
                <motion.div style={{ left: '12rem', top: '19rem' }}>
                    <Service
                        emoji={Humble}
                        heading={'UI/UX'}
                        detail={"asdgk sdafgads ksad;s k;ak;fga ;asgf ;asfg;"}
                    />
                </motion.div>
                <div className='blur s-blur2' style={{ background: 'var(--purple)' }}></div>
            </div>

        </div >
    );
};

export default Services;