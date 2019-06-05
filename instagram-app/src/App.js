import React from 'react';
// import dummyData from './dummy-data';
// import SearchBar from './components/SearchBar/SearchBar.js';
// import PostContainer from './components/PostContainer/PostContainer.js'
import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './components/authentication/withAuthenticate';
import LoginPage from './components/Login/LoginPage';
import './App.scss';


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: []
//       // data: dummyData
//     };
//   }

//   // componentDidMount() {
//   //   this.setState({
//   //     data: dummyData
//   //   })
//   // }

//   render() {
//     return (
//       <div>
//         <PostsPage />
//         {/* <SearchBar />
//         <PostContainer postData={this.state.data} /> */}
//       </div>
//     )
//   }
// }
const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);
const App = () => <ComponentFromWithAuthenticate />


export default App;
