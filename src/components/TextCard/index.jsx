import React from 'react';
import P from 'prop-types';
import { Container } from './styles';

export function TextCard({
  title, imglink, subtitle,
}) {
  return (
    <Container>
      <img src={imglink} alt="background" />
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
    </Container>
  );
}

TextCard.propTypes = {
  title: P.string.isRequired,
  imglink: P.string.isRequired,
  subtitle: P.string.isRequired,
};
