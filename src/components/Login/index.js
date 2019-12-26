import React, {useState} from 'react';

import { Container } from './styles';
import { Link } from 'react-router-dom';
import api from '../../services/api';

export default function Login() {

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState("");

  function doSubmit(e){
    e.preventDefault();
    console.log(username, password);
    
    api
      .post("/user/auth", {username, password})
      .then(response => {
        console.log(response);
      })
      .catch((err) => {
        const { data } = err.response;
        alert(data !== '' ? data.error.message : 'Usuário ou senha inválido.');
      });
  }

  return (
    <Container>
      <form onSubmit={doSubmit}>
        <h1>Login</h1>
        <input
          value={username}
          onChange={e => setUserName(e.target.value)}
          type="text"
          placeholder="Username"
          required
        />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          required
        />
        <div className="navigation">
          <button type="submit">Sing-in</button>
          <Link to="/register">Sing-up</Link>
        </div>
      </form>
    </Container>
  );
}
