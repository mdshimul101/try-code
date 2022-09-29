import React from 'react';
import './Language.css'

const Language = ({ language, handleAddToList }) => {
    const { name, timeRequired, img } = language;
    return (
        <div className='program'>
            <img src={img} alt="" />
            <div className='lang-type'>
                <h2>{name}</h2>
                <p>Time Required: {timeRequired} min</p>
                <button onClick={() => handleAddToList(language)} className='btn-add'>
                    <p className='btn-text'>Add To List</p>
                </button>
            </div>


        </div>
    );
};

export default Language;