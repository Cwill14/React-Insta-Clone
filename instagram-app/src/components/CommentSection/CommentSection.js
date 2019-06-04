import React from 'react';
import Comment from './Comment.js';

function CommentSection(props) {
    
    // addNewComment = (e, i) => {
        
    // }
    return (
        <div>
            {props.comments.map(comment => (
                <Comment
                    key={comment.id}    
                    username={comment.username}
                    text={comment.text} 
                />
            ))}
            {/* <form onSubmit={addNewComment()}> */}
            <form>
                <input type="text" placeholder="Add a comment..." />
            </form>           
            
            <p>time here</p>
        </div>
    )
}


export default CommentSection;
