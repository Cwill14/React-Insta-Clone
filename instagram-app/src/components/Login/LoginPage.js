import React from 'react';

class LoginPage extends React.Component {

    state = {
        username: "",
        password: ""
    }

    handleChanges = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = () => {
        localStorage.setItem("loggedIn", this.state.username);
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={e => this.login (e)}>
                    <input type="username" name="username" value={this.state.username} required onChange={e => this.handleChanges (e)}/>
                    <input type="password" name="password" value={this.state.password} required onChange={e => this.handleChanges (e)}/>
                    <button>Login</button>
                </form>
            </div>
        );
    }
    
}

export default LoginPage;