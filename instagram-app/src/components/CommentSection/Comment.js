import React from 'react';
import PropTypes from 'prop-types';


const Comment = props => {
    console.log(props);
    
    return (
        <div>
            <p><b>{props.username}</b> {props.text}</p>
        </div>
    )
}


Comment.propType = {
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired 
}

export default Comment;