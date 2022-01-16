import React from 'react';
import P from 'prop-types';
import { Container, Content } from './styles';
import { ButtonLink } from '../ButtonLink';

export function TextCard({
  title, subtitle,
}) {
  return (
    <Container>
      <Content>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <div className="button-container">
          <ButtonLink>Ler</ButtonLink>
        </div>
      </Content>
    </Container>
  );
}

TextCard.propTypes = {
  title: P.string.isRequired,
  subtitle: P.string.isRequired,
};
