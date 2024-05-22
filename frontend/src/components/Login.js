import React, { useState } from 'react';
import api from '../services/api';

function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const auth = btoa(`${username}:${password}`);
        api.defaults.headers.common['Authorization'] = `Basic ${auth}`;
        try {
            const response = await api.get('/devices');
            onLogin(response.data);
        } catch (error) {
            alert('Invalid credentials');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;
