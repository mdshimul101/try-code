import React, { useEffect, useState } from 'react';
import './Info.css'

import 'react-toastify/dist/ReactToastify.css';
import Profile from '../Profile/Profile';
import Exercise from '../Exercise/Exercise';
import Toast from '../Toast/Toast';


const Info = ({ info }) => {
    const [time, setTime] = useState(0);

    let total = 0;

    for (const activity of info) {


        total = parseInt(total + activity.timeRequired);

    }

    const timeSet = (time) => {
        setTime(time);
        localStorage.setItem('time', JSON.stringify(time));
    }
    useEffect(() => {

        const preTime = localStorage.getItem('time');
        if (preTime) {
            setTime(preTime);
        }


    }, [time])



    return (
        <div className="info-container">
            <Profile></Profile>
            <div className="break">
                <h2>Add A Break</h2>
                <div>
                    <button onClick={() => timeSet(10)} className='btn1'>10min</button>
                    <button onClick={() => timeSet(30)} className='btn2'>30min</button>
                    <button onClick={() => timeSet(45)} className='btn3'>45min</button>
                    <button onClick={() => timeSet(60)} className='btn4'>60min</button>

                </div>
            </div>
            <Exercise total={total} time={time}></Exercise>
            <Toast></Toast>

        </div>
    );
};

export default Info;