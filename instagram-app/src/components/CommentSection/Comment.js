import React from 'react';

const Comment = props => {
    return (
        <div>
            <p><b>{props.username}</b> {props.text}</p>
        </div>
    )
}

export default Comment;