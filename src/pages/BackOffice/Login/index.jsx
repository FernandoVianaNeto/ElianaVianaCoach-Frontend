import React from 'react';
import { Container, Form } from './styles';

import { Input } from '../../../components/Input';

export function Login() {
  return (
    <Container>
      <Form>
        <Input
          placeholder="Usuário"
          name="password"
        />
      </Form>
    </Container>
  );
}
