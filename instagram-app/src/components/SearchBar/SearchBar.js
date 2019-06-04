import React from 'react';
import './SearchBar.scss';
import { FaInstagram } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { FaRegCompass } from 'react-icons/fa';
import { FaRegUser } from 'react-icons/fa';



const SearchBar = props => {
    return (
        <div className="search-bar">
            <FaInstagram className="bar-item" />
            <div className="bar-item">
                <h1>Instagram</h1>
            </div>
            <input className="bar-item" type="text" placeholder="Search" />
            <FaRegCompass className="bar-item" />
            <FaRegHeart className="bar-item" />
            <FaRegUser />
        </div>
    )
}

export default SearchBar;