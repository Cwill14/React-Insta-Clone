import React from 'react';

const withAuthenticate = PostsPage => LoginPage =>
    class extends React.Component {
        constructor() {
            super();
            this.state = {
                loggedIn: false
            }
        }

        componentDidMount() {
            // check localStorage to see if a use is logged in, and set state accordingly
            if (localStorage.getItem('loggedIn')) {
                this.setState({
                    loggedIn: true
                })
            }
        }    
        render() {
            if (this.state.loggedIn) {
                return <PostsPage />
            } else {
                return <LoginPage />
            }
        }
    }

export default withAuthenticate;