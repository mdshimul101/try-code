import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faContactBook } from '@fortawesome/free-solid-svg-icons'
import './Profile.css'
const Profile = () => {
    return (
        <div className='profile'>
            <h2>MD Shimul</h2>
            <p>MEAN Stack Developer</p>
            <p><FontAwesomeIcon icon={faContactBook}></FontAwesomeIcon> shimulfjr101@gmail.com</p>
            <p><strong>Skill : </strong>JavaScript, Java , C , Python</p>
        </div>
    );
};

export default Profile;