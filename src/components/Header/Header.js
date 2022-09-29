import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComputer } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <p className='header'><FontAwesomeIcon icon={faComputer}></FontAwesomeIcon><span className='side-name'>Try Code</span></p>
        </div>
    );
};

export default Header;
