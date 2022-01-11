import React from 'react';
import P from 'prop-types';
import { Container } from './styles';
import { ButtonLink } from '../ButtonLink';

export function EspecialidadesCard({
  children, title, subtitle, buttontext, imglink, invert,
}) {
  return (
    <Container>
      {
        invert ? (
          <>
            <div className="column">
              <h1>{title}</h1>
              <h3>{subtitle}</h3>
              <p>{children}</p>
              <ButtonLink>{buttontext}</ButtonLink>
            </div>
            <img src={imglink} alt="Especialidade foto" />
          </>
        ) : (
          <>
            <img src={imglink} alt="Especialidade foto" />
            <div className="column" />
          </>
        )
      }
    </Container>
  );
}

EspecialidadesCard.propTypes = {
  children: P.node.isRequired,
  title: P.string.isRequired,
  subtitle: P.string.isRequired,
  buttontext: P.string.isRequired,
  imglink: P.string.isRequired,
  invert: P.bool,
};

EspecialidadesCard.defaultProps = {
  invert: false,
};
