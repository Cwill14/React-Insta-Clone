import React from 'react';
import Comment from './Comment.js';

function CommentSection(props) {
    return (
        <div>
            {props.comments.map(comment => (
                <Comment
                key={comment.id}    
                username={comment.username}
                text={comment.text} 
                />
            ))}
            <input type="text" placeholder="Add a comment..." />

        </div>
    )
}


export default CommentSection;
