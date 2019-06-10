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
        posts: [],
        search: '',
        filteredPosts: []
      };
    }
  
    componentDidMount() {
      this.setState({
        posts: dummyData
      })
    }
    
    handleChanges = e => {
      this.setState({
        
        filteredPosts: this.state.posts.filter(post => post.username.includes(e.target.value) )

      })
      // console.log('handlechanges', this.state.search);

    } 

    // searchFn = e => {
    //   e.preventDefault();
    //   console.log('searchfn', this.state.search);
    //   this.setState({
    //   })
    // }

    render() {
      return (
        <div>
          <SearchBar handleChanges={this.handleChanges} searchValue={this.state.search} /*searchFn={this.searchFn}*/ />
          <PostContainer postData={this.state.filteredPosts > 0 ? this.state.filteredPosts : this.state.posts} />
        </div>
      )
    }
  }

export default PostsPage;