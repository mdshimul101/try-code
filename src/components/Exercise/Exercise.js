import React from 'react';
import './Exercise.css'

const Exercise = ({ time, total }) => {
    return (
        <div className="exercise">
            <h2>Exercise Details</h2>
            <div className="time">
                <p>Exercise Time: {total}min</p>
            </div>
            <div className="break-time">
                <p>Break Time: {time}min</p>
            </div>
        </div>
    );
};

export default Exercise;