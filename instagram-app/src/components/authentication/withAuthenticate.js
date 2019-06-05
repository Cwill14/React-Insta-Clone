import React from 'react';

const withAuthenticate = PostsPageComponent => LoginPage =>
    class extends React.Component {
        // constructor() {
        //     super();
        //     this.state = {
        //         loggedIn: false;
        //     }
        // }

        // componentDidMount() {
        //     if(){
        //         this.setState({

        //         })
        //     } else {
        //         this.setState({
                    
        //         })
        //     }
        // }

        render() {
            return (
                <PostsPageComponent/>
            );
        }
    }

export default withAuthenticate;