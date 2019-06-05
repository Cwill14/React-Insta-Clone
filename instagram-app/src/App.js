import React from 'react';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar.js';
import PostContainer from './components/PostContainer/PostContainer.js'
import './App.scss';


class App extends React.Component {
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

export default App;
