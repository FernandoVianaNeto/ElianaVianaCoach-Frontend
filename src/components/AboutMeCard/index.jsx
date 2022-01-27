import React from 'react';
import P from 'prop-types';
import { Container } from './styles';

export function AboutMeCard({ children, imglink, title }) {
  return (
    <Container>
      <img src={imglink} alt="aboutmeimage" />
      <div className="content">
        <h1>{title}</h1>
        <p>{children}</p>
      </div>
    </Container>
  );
}

AboutMeCard.propTypes = {
  children: P.node.isRequired,
  imglink: P.string.isRequired,
  title: P.string.isRequired,
};
