import React from 'react';
// import dummyData from './dummy-data';
// import SearchBar from './components/SearchBar/SearchBar.js';
// import PostContainer from './components/PostContainer/PostContainer.js'
import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './components/authentication/withAuthenticate';
import LoginPage from './components/Login/LoginPage';
import './App.scss';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);
const App = () => <ComponentFromWithAuthenticate />


export default App;
