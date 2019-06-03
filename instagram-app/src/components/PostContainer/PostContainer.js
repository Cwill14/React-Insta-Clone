import React from 'react';

import CommentSection from '../CommentSection/CommentSection.js';

const PostContainer = props => {
    return (
        <div>
            {props.postData.map(post => (
                <div>
                    <CommentSection comments={post.comments} />
                </div>
            ))}
        </div>    
    )
}


export default PostContainer;