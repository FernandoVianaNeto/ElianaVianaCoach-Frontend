import React, { useState } from 'react';
import { Container, Form } from './styles';

import { useAuth } from '../../../hooks/useAuth';

import { Input } from '../../../components/Input';

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { unAuth, handleLogin } = useAuth();

  return (
    <Container>
      <Form onSubmit={() => handleLogin}>
        <h1>Faça login</h1>
        <Input
          placeholder="Usuário"
          name="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          type="text"
        />
        <Input
          placeholder="Senha"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
        />
        {
          unAuth && <small>Senha/login inválidos</small>
        }
        <button type="button" onClick={() => handleLogin({ password, username })}>Fazer login</button>
      </Form>
    </Container>
  );
}
