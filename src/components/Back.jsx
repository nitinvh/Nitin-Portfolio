import React from 'react';
import { Link } from 'react-router-dom';
import _back from '../assets/back.svg'

const BackButton = () => {
    return (
        // Link to the homepage ("/")
        <button className="btn btn-outline-success p-2">
        <Link 
            to="/" 
            className="d-inline-flex align-items-center text-decoration-none text-theme-color fs-5" // Bootstrap classes for styling
        >
            <img src={_back} className='' style={{ maxWidth: '24px', marginBottom: '' }}  />
            <span className="">Back</span>
        </Link>
        </button>
    );
}

export default BackButton;