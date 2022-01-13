import React from 'react';
import P from 'prop-types';
import { Container } from './styles';
import { ButtonLink } from '../ButtonLink';

export function EspecialidadesCard({
  children, title, subtitle, buttontext, imglink, invert, button,
}) {
  return (
    <Container invert={invert}>
      {
        invert ? (
          <>
            <img src={imglink} alt="Especialidade foto" />
            <div className="column">
              <h1>{title}</h1>
              <h3>{subtitle}</h3>
              <p>{children}</p>
              {
                button
                 && (<div className="button-container"><ButtonLink>{buttontext}</ButtonLink></div>)
              }
            </div>
          </>
        ) : (
          <>
            <div className="column">
              <h1>{title}</h1>
              <h3>{subtitle}</h3>
              <p>{children}</p>
              {
                button && <div className="button-container"><ButtonLink>{buttontext}</ButtonLink></div>
              }
            </div>
            <img src={imglink} alt="Especialidade foto" />
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
  button: P.bool,
};

EspecialidadesCard.defaultProps = {
  invert: false,
  button: false,
};
