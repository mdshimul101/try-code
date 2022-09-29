import React from 'react';
import './Language.css'

const Language = ({ pd }) => {
    const { name, timeRequired, img } = pd;
    return (
        <div className='program'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <p><small>Time Required: {timeRequired} min</small></p>
            <button className='btn-add'>
                <p className='btn-text'>Add To Cart</p>
            </button>

        </div>
    );
};

export default Language;