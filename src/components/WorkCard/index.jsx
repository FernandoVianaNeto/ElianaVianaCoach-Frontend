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
        <p className="description-title">{title}</p>
        <p className="description-p">{children}</p>
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
