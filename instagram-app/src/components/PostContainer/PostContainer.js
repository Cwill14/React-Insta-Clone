import React from 'react';

import CommentSection from '../CommentSection/CommentSection.js';

const PostContainer = props => {
    return (
        <div>
            {props.postData.map(post => (
                <div>
                    <div>
                        <img src={post.thumbnailUrl} alt="user thumbnail"/>                    
                        <h2>{post.username}</h2>
                    </div>
                    <img src={post.imageUrl} alt="post" />
                    <div>like and comment icons</div>
                    <p><b>{post.likes} likes</b></p>
                    <CommentSection comments={post.comments} />
                </div>
            ))}
        </div>    
    )
}


export default PostContainer;