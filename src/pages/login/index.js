import React, { useState } from 'react';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

import './styles.css'

import logoImg from '../../assets/logo-alliance-azul.PNG'

export default function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    async function handleLogin(event) {
        event.preventDefault();

        try {
            const res = await api.post('users/login', { username, password});

            localStorage.setItem('name', res.data.name);

            history.push('/computers/main');
        } catch (error) {
            alert('Falha na autenticação');
        }
    }

    return (
        <div className="login-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Allianca Consultoria"/>
                    <h1>Login</h1>
                    <p>Acesse com usuário e senha</p>
                </section>

                <form onSubmit={handleLogin}>
                    <input 
                        placeholder="Usuário"
                        value={username}
                        onChange={event => setUsername(event.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder="Senha"
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />

                    <button className="button-default" type="submit">Entrar</button>
                </form>
            </div>
        </div>
    )
}