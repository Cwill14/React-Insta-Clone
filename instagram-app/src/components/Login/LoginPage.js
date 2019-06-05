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
                <form className="login-form" onSubmit={e => this.login (e)}>
                    <input className="login-field" type="username" name="username" placeholder="username" value={this.state.username} required onChange={e => this.handleChanges (e)}/>
                    <input className="login-field" type="password" name="password" placeholder="password" value={this.state.password} required onChange={e => this.handleChanges (e)}/>
                    <button>Login</button>
                </form>
            </div>
        );
    }
    
}

export default LoginPage;