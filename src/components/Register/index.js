import React, { useState } from "react";

import { Container } from "./styles";
import { Link } from "react-router-dom";
import api from "../../services/api";

export default function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const [fieldError, setFieldError] = useState(null);

  function doSubmit(e){
    e.preventDefault();
    const userCreateData = {name, email, passwordConfirm, username, password};

    api.post('/user', userCreateData).then(response => {
      
      const { data } = response; 

      if (response.status === 200) {
        alert(
          "Usuário criado com sucesso, para continuar acessando o sistema você deve confirmar o seu email no link que enviamos para: " +
            data.email
        );
      }
    }).catch((err, err2) => {
      const {data} = err.response;
      const {field, message} = data.error;
      setFieldError(field);
      alert(message);
    });
  }

  return (
    <Container>
      <form onSubmit={doSubmit}>
        <h1>Register</h1>
        <input
          className={fieldError === "name" ? "error" : ""}
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
          placeholder="Name"
          required
        />
        <input
          className={fieldError === "email" ? "error" : ""}
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          required
        />
        <input
          className={fieldError === "username" ? "error" : ""}
          value={username}
          onChange={e => setUserName(e.target.value)}
          type="text"
          placeholder="Username"
          required
        />
        <input
          className={fieldError === "password" ? "error" : ""}
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          required
        />
        <input
          className={fieldError === "passwordConfirm" ? "error" : ""}
          value={passwordConfirm}
          onChange={e => setPasswordConfirm(e.target.value)}
          type="password"
          placeholder="Confirmation Password"
          required
        />
        <div className="navigation">
          <button type="submit">Sing-up</button>
          <Link to="/login">Sing-in</Link>
        </div>
      </form>
    </Container>
  );
}
