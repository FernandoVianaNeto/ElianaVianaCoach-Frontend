import React from 'react';
import P from 'prop-types';
import { Container } from './styles';

export function WorkCard({
  children, imglink, imgalt, title,
}) {
  return (
    <Container>
      <div className="img-container">
        <img src={imglink} alt={imgalt} />
      </div>
      <div className="description">
        <p>{title}</p>
        {children}
      </div>
    </Container>
  );
}

WorkCard.propTypes = {
  children: P.node.isRequired,
  imglink: P.string.isRequired,
  imgalt: P.string.isRequired,
  title: P.string.isRequired,
};
