import React from 'react';
import Comment from './Comment.js';

function CommentSection(props) {
    return (
        <div>
            {props.comments.map(comment => (
                <Comment
                    username={comment.username}
                    text={comment.text} 
                />
            ))}

        </div>
    )
}


export default CommentSection;
