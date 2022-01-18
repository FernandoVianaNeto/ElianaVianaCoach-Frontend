import React from 'react';
import { Container, Form } from './styles';

import { Input } from '../../../components/Input';
import url from '../../../baseURL.json';

export function Login() {
  return (
    <Container>
      <Form action={`${url.baseURL}/authenticateuser`} method="POST">
        <h1>Faça login</h1>
        <Input
          placeholder="Usuário"
          name="username"
          type="text"
        />
        <Input
          placeholder="Senha"
          name="password"
          type="password"
        />
        <button type="submit">Fazer login</button>
      </Form>
    </Container>
  );
}
