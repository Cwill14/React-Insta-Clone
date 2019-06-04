import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection.js';
import './PostContainer.scss';
import { FaHeart } from 'react-icons/fa';

const PostContainer = props => {
    return (
        <div className="post-box">
            {props.postData.map(post => (
                <div key={post.id} className="post">
                    <div className="post-header">
                        <img className="thumbnail" src={post.thumbnailUrl} alt="user thumbnail"/>                    
                        <h2>{post.username}</h2>
                    </div>
                    <img className="main-img" src={post.imageUrl} alt="post" />
                    <div>like and comment icons</div>
                    <FaHeart />
                    <p><b>{post.likes} likes</b></p>
                    <CommentSection comments={post.comments} />
                </div>
            ))}
        </div>    
    )
}

PostContainer.propTypes = {
    postData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            username: PropTypes.string.isRequired,
            thumbnailUrl: PropTypes.string.isRequired,
            imageUrl: PropTypes.string.isRequired,
            likes: PropTypes.number.isRequired,
            timestamp: PropTypes.string.isRequired,
            comments: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    username: PropTypes.string.isRequired,
                    text: PropTypes.string.isRequired 
            }))
        })
    )
}

export default PostContainer;