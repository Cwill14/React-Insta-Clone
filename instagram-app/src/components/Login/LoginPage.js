import React from 'react';
import Login from './Login';

const LoginPage = () => {
    
    return (
        <div>
            <h1>Login</h1>
            <form>
                <input type="username" />
                <input type="password" />
                <button onClick={Login}>Login</button>
            </form>
        </div>
    );
}

export default LoginPage;