import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import { PostBox, PostStyle } from './PostContainerStyles';


class PostContainer extends React.Component {

    render() {
        return (
            <PostBox>
                {this.props.postData.map(post => (
                    <PostStyle key={post.id}>
                        <Post post={post} />
                    </PostStyle>
                ))}
            </PostBox>    
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