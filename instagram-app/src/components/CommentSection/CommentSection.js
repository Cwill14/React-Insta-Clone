import React from 'react';
import Comment from './Comment.js';
import { FaEllipsisH } from 'react-icons/fa';


class CommentSection extends React.Component {
    
    state = {
        comments: [],
        comment: "",
        username: ""
    }

    componentDidMount() {
        // fake API call here
            // 1. call API
            // 2. API returns data
            // 3. set data to state
        this.setState({
            comments: this.props.comments,
            comment: "",
            username: "bill"
        })
    }

    handleChanges = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    } 
    
    addNewComment = (e, i) => {
        e.preventDefault();
        let newComment = {
            id: this.state.comments.length + 1,
            // username: "billybob",
            username: this.state.username,
            text: this.state.comment
        }
        this.setState({
            ...this.state,
            comments: [...this.state.comments, newComment],
            comment: ""
        })
    }

    render() {
        return (
            <div>
                {this.state.comments.map(comment => (
                    <Comment
                        key={comment.id}    
                        username={comment.username}
                        text={comment.text} 
                    />
                ))}
                <p className="time" >TIME HERE</p>
                <form onSubmit={this.addNewComment}>
                    <input onChange={this.handleChanges} name="comment" value={this.state.comment} type="text" placeholder="Add a comment..." />
                    <FaEllipsisH className="ellipsis"/>
                </form>           
                
            </div>
        )
    }
    
}


export default CommentSection;
