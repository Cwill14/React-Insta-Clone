import React from 'react';
import './SearchBar.scss';

const SearchBar = props => {
    return (
        <div className="search-bar">
            <div>insta logo</div>
            <div>
                <h1>Instagram</h1>
            </div>
            <input type="text" placeholder="Search"/>
            <div>compass icon</div>
            {/* <div><i class="far fa-heart"></i></div> */}
            <div>Heart</div>
            <div>profile icon</div>
        </div>
    )
}

export default SearchBar;