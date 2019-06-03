import React from 'react';

import CommentSection from '../CommentSection/CommentSection.js';

const PostContainer = props => {
    return (
        <div>
            {props.postData.map(post => (
                <div>
                    <div>
                        <img src={post.thumbnailURL} alt="user thumbnail"/>                    
                        <h2>{post.username}</h2>
                    </div>
                    <img src={post.imageURL} alt="post" />
                    <CommentSection comments={post.comments} />
                </div>
            ))}
        </div>    
    )
}


export default PostContainer;