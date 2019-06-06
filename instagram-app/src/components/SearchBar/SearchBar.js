import React from 'react';
import styled from 'styled-components'
import { FaInstagram } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa';
import { FaRegCompass } from 'react-icons/fa';
import { FaRegUser } from 'react-icons/fa';



// class SearchBar extends React.Component {
    
//     handleChanges = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }

//     search = () => {
        
//         // .filter()
//     }

//     render() {

//         return (
//             <div className="search-bar">
//                 <FaInstagram className="bar-item icon" />
//                 <div className="bar-item">
//                     <h1>Instagram</h1>
//                 </div>
//                 <input className="bar-item" type="text" placeholder="Search" onChange={this.handlechanges} onSubmit={this.search} />
//                 <FaRegCompass className="bar-item icon" />
//                 <FaRegHeart className="bar-item icon" />
//                 <FaRegUser className="bar-item icon" />
//             </div>
//         )
//     }
// }

// export default SearchBar;

// ^Before Refactoring to Styled Component^ 
const SearchDiv = styled.div`
    display: flex;
    flex-flow: row norwap;
    align-items: center;
    justify-content: space-between;
`;
const BarItem = styled.div`
    margin: 0 10px;
`;
const BarIcon = styled(BarItem)`
    height: 2rem;
    width: 2rem;
`;
const BarInput = styled(BarItem)`
    transform: scale(1.15);
    text-align: center;
    padding: 0.25rem 0;
    border: 1px solid #CCC;
    background-color: #EEE;
`;
const BarHeader = styled(BarItem)`
    border-left: 1px solid black;
    padding: 0 5px 0 15px;
    font-family: 'Pacifico', cursive;
`;

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
            <SearchDiv>
                <BarIcon><FaInstagram /></BarIcon>
                <BarHeader><h1>Instagram</h1></BarHeader>
                <BarInput>
                    <input 
                        type="text" 
                        placeholder="Search" 
                        onChange={this.handlechanges} 
                        onSubmit={this.search} 
                    />
                </BarInput>
                <BarIcon><FaRegCompass /></BarIcon>
                <BarIcon><FaRegHeart /></BarIcon>
                <BarIcon><FaRegUser /></BarIcon>
            </SearchDiv>
        )
    }
}

export default SearchBar;