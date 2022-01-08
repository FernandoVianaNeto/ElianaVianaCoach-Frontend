import React from 'react';
import P from 'prop-types';
import { AiFillInstagram } from 'react-icons/ai';
import {
  Container, LogoContainer, ChildrenContainer, ButtonsContainer,
} from './styles';

export function Menu({ children }) {
  return (
    <Container>
      <ChildrenContainer>
        {children}
      </ChildrenContainer>
      <LogoContainer>
        <h3>ElianaViana Coach</h3>
        <small>Coach e Psicanalista</small>
      </LogoContainer>
      <ButtonsContainer>
        <AiFillInstagram />
      </ButtonsContainer>
    </Container>
  );
}

Menu.propTypes = {
  children: P.node.isRequired,
};
