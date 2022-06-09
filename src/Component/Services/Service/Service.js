import React from 'react';
import './Service.css';

const Service = ({ emoji, heading, detail }) => {
    console.log(heading)
    return (
        <div className='card'>

            <img src={emoji} alt="" />
            <span>{heading}</span>
            <span>{detail}</span>
            <div>
                <button className='c-button'> LEARN MORE</button>
            </div>

        </div>
    );
};

export default Service;