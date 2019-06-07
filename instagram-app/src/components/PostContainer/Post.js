import React, { Component } from 'react';
import { FaRegHeart, FaHeart, FaRegComment } from 'react-icons/fa';
import CommentSection from '../CommentSection/CommentSection.js';
import { PostHeader } from './PostContainerStyles';



class Post extends Component {
    state = {
        liked: false,
        numLikes: this.props.post.likes
    }

    handleLikes = () => {
        if(this.state.liked){
            this.setState(prevState => {
                return {
                    liked: !prevState.liked,
                    numLikes: prevState.numLikes - 1
                }
            })
        } else {
            this.setState(prevState => {
                return {
                    liked: !prevState.liked,
                    numLikes: prevState.numLikes + 1
                }
            })
        }
    }
    
    render() {
        return (
            <div>
                <PostHeader>
                    <img className="thumbnail" src={this.props.post.thumbnailUrl} alt="user thumbnail"/>                    
                    <h2>{this.props.post.username}</h2>
                </PostHeader>
                    <img className="main-img" src={this.props.post.imageUrl} alt="post" />
                    {this.state.liked ? <FaHeart onClick={this.handleLikes} className="bottom-icons" /> : <FaRegHeart onClick={this.handleLikes} className="bottom-icons" />}
                    <FaRegComment className="bottom-icons"/>
                    <p><b>{this.state.numLikes} likes</b></p>
                    <CommentSection comments={this.props.post.comments} />
            </div>
        );
    }
}

export default Post;
