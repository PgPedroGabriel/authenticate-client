import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import api from '../../services/api';
import { useParams, Link } from 'react-router-dom';

export default function ConfirmEmail() {

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState(null);

  const {token} = useParams();

  useEffect( () => {

    api.put(`/user/auth/verify/${token}`).then(response => {
      setMessage('Usuário validado com sucesso');
    }).catch(err => {

      if(err.response.status === 404){
        setMessage('Usuário já foi validado ou não foi possível encontrar o usuário');
      }      
    }).then(() => {
      setLoading(false);
    });

  }, [token]);
 
  return (
    <Container>
      {
        loading ? (<p>Por favor aguarde...</p>) : (<p>{message}</p>) 
      }
      <Link to="/login">
        Voltar para login
      </Link>
    </Container>
  );
}
