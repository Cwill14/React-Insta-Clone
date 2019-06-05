import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection.js';
import { FaRegHeart } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { FaRegComment } from 'react-icons/fa';



class PostContainer extends React.Component {
    state = {
        liked: false
    }
    
    toggleLike = () => {
        this.setState({
            liked: !this.state.liked,
            // numLikes: numLikes + 1
        })
    }

    render() {
        return (
            <div className="post-box">
                {this.props.postData.map(post => (
                    <div key={post.id} className="post">
                        <div className="post-header">
                            <img className="thumbnail" src={post.thumbnailUrl} alt="user thumbnail"/>                    
                            <h2>{post.username}</h2>
                        </div>
                        <img className="main-img" src={post.imageUrl} alt="post" />
                        {this.state.liked ? <FaHeart onClick={this.toggleLike} className="bottom-icons" /> : <FaRegHeart onClick={this.toggleLike} className="bottom-icons" />}
                        <FaRegComment className="bottom-icons"/>
                        <p><b>{post.likes} likes</b></p>
                        <CommentSection comments={post.comments} />
                    </div>
                ))}
            </div>    
        )
    }
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