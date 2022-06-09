import React from 'react';
import './Flowtingdiv.css';

const Flowtingdiv = ({ image, text1, text2 }) => {
    return (
        <div className='Flowtingdiv'>
            <img src={image} alt="" />
            {text1} <br />
            {text2}
        </div>
    );
};

export default Flowtingdiv;