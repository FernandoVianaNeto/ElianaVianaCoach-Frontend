import React from 'react';
import P from 'prop-types';
import { Link } from 'react-router-dom';
import { Container } from './styles';

export function MenuLink({ link, local }) {
  return (
    <Container>
      <Link to={link}>{local}</Link>
    </Container>
  );
}

MenuLink.propTypes = {
  link: P.string.isRequired,
  local: P.string.isRequired,
};
