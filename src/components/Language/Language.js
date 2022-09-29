import React from 'react';
import './Language.css'

const Language = ({ language }) => {
    const { name, timeRequired, img } = language;
    return (
        <div className='program'>
            <img src={img} alt="" />
            <div className='lang-type'>
                <h2>{name}</h2>
                <p><small>Time Required: {timeRequired} min</small></p>
                <button className='btn-add'>
                    <p className='btn-text'>Add To Cart</p>
                </button>
            </div>


        </div>
    );
};

export default Language;