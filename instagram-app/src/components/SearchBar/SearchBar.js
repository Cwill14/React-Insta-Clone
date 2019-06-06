import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { FaRegCompass } from 'react-icons/fa';
import { FaRegUser } from 'react-icons/fa';



class SearchBar extends React.Component {
    
    handleChanges = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    search = () => {
        
        // .filter()
    }

    render() {

        return (
            <div className="search-bar">
                <FaInstagram className="bar-item icon" />
                <div className="bar-item">
                    <h1>Instagram</h1>
                </div>
                <input className="bar-item" type="text" placeholder="Search" onChange={this.handlechanges} onSubmit={this.search} />
                <FaRegCompass className="bar-item icon" />
                <FaRegHeart className="bar-item icon" />
                <FaRegUser className="bar-item icon" />
            </div>
        )
    }
}

export default SearchBar;