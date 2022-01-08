import React from 'react';
import P from 'prop-types';
import { Container, LogoContainer, ChildrenContainer } from './styles';

export function Menu({ children }) {
  return (
    <Container>
      <LogoContainer>
        <h3>Eliana Viana Coach</h3>
        <small>Coach e Psicanalista</small>
      </LogoContainer>
      <ChildrenContainer>
        {children}
      </ChildrenContainer>
    </Container>
  );
}

Menu.propTypes = {
  children: P.node.isRequired,
};
