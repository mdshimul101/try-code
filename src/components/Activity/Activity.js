import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Info from '../Info/Info';

import Language from '../Language/Language';
import './Activity.css';
const Activity = () => {
    const [activities, setActivities] = useState([]);
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])
    const handleAddToList = (activity) => {
        const newInfo = [...info, activity];
        setInfo(newInfo);
    }
    return (
        <div className='activity-container'>
            <div>
                <Header></Header>
                <div className="activities-container">

                    {
                        activities.map(language => <Language key={language.id}
                            language={language} handleAddToList={handleAddToList}></Language>)
                    }
                </div>
            </div>
            <Info info={info}> </Info>

        </div>

    );
};

export default Activity;