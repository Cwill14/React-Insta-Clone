import React from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js'
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    };
  }
  render() {
    return (
      <div>
        <SearchBar />
        <PostContainer key={this.state.data.id} postData={this.state.data} />
      </div>
    )
  }
}

export default App;
