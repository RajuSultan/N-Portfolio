import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import Linkedid from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/mainpic.svg';
import thumbup from '../../img/thumbup.png';
import crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import Flowtingdiv from '../Flowtingdiv/Flowtingdiv';
import { motion } from 'framer-motion';

const Intro = () => {
    const transition = { duration: 1, type: "spring" }
    return (
        <div className='intro'>
            <div className="i-left">
                <div className="i-name">
                    <span>Hy! I Am</span>
                    <span>MD SULTAN</span>
                    <span>
                        Fontend Developer with high level of Experience in web designing and develepment, producting the Quality work
                    </span>
                </div>
                <button className='button  i-button'>Hire me</button>
                <div className="i-icons">
                    <img src={Github} alt="" />
                    <img src={Linkedid} alt="" />
                    <img src={Instagram} alt="" />
                </div>
            </div>
            <div className="i-right">
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img style={{}} src={boy} alt="" />
                <motion.img
                    initial={{ left: '-36%' }}
                    whileInView={{ left: '-24%' }}
                    transition={transition}

                    src={glassesimoji} alt="" />
                <motion.div
                    initial={{ left: '74%', top: '-4%' }}
                    whileInView={{ left: '68%' }}
                    transition={transition}
                    style={{ top: '-4%', left: '68%' }}>
                    <Flowtingdiv image={crown} text1={'Web'} text2={'Developer'}></Flowtingdiv>
                </motion.div>
                <motion.div
                    initial={{ left: '9rem', top: '18rem' }}
                    whileInView={{ left: '0rem' }}
                    transition={transition}
                    style={{ top: '18rem', left: '0rem' }}>
                    <Flowtingdiv image={thumbup} text1={'Best Design'} text2={'Award'}></Flowtingdiv>
                </motion.div>
                {/* blur div */}
                <div className='blur' style={{ background: 'rgb(238 210 255)' }}></div>
                <div className='blur' style={{
                    background: '#C1f5ff',
                    top: '17rem',
                    width: '21rem',
                    height: '11rem',
                    left: '-9rem'
                }}></div>
            </div>

        </div>
    );
};

export default Intro;