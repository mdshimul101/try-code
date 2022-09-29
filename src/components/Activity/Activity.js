import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';

import Language from '../Language/Language';
import './Activity.css';
const Activity = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])
    return (
        <div className='activity-container'>
            <div>
                <Header></Header>
                <div className="activities-container">

                    {
                        activities.map(language => <Language key={language.id}
                            language={language}></Language>)
                    }
                </div>
            </div>
            <div className="info-container">
                <p>Personal Info</p>
            </div>

        </div>

    );
};

export default Activity;