import React from 'react';
import { Link } from 'react-router-dom'
import '../css/App.css';

const Header = () => (
    <header>
        <Link className='nav' to='/'>Converter</Link>
        <Link className='nav' to='/list'>List</Link>
    </header>
);

export default Header;
