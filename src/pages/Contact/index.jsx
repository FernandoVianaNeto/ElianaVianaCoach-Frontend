import React from 'react';
import P from 'prop-types';
import { Container } from './styles';

export function Contact({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

Contact.propTypes = {
  children: P.node.isRequired,
};
