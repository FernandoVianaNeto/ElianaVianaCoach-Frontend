import React from 'react';
import P from 'prop-types';
import { Container } from './styles';

export function MenuLink({ link }) {
  return (
    <Container>
      <p>{link}</p>
    </Container>
  );
}

MenuLink.propTypes = {
  link: P.string.isRequired,
};
