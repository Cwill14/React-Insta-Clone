import React from 'react';
// import dummyData from './dummy-data';
import dummyData from '../../dummy-data';
// import SearchBar from './components/SearchBar/SearchBar.js';
import SearchBar from '../SearchBar/SearchBar.js';
// import PostContainer from './components/PostContainer/PostContainer.js';
import PostContainer from '../PostContainer/PostContainer.js';


class PostsPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: []
        // data: dummyData
      };
    }
  
    componentDidMount() {
      this.setState({
        data: dummyData
      })
    }
  
    render() {
      return (
        <div>
          <SearchBar />
          <PostContainer postData={this.state.data} />
        </div>
      )
    }
  }

export default PostsPage;