import React from 'react';
import P from 'prop-types';
import { Container } from './styles';

export function TestimonyCard({ children, name }) {
  return (
    <Container>
      <p>{children}</p>
      <p className="name">
        -
        {' '}
        {name}
      </p>
    </Container>
  );
}

TestimonyCard.propTypes = {
  children: P.node.isRequired,
  name: P.string.isRequired,
};
