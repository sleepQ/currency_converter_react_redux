import React from 'react';
import { Link } from 'react-router';
import '../css/App.css';

const Header = () => {
        return (
            <header>
                <Link className='nav' to='/'>Converter</Link>
                <Link className='nav' to='/list'>List</Link>
            </header>
        );
}

export default Header;
