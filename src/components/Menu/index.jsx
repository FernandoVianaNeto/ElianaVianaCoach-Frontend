import React from 'react';
import P from 'prop-types';
import { AiFillInstagram, AiFillFacebook } from 'react-icons/ai';

import {
  Container, LogoContainer, ChildrenContainer, ButtonsContainer,
} from './styles';
import { MenuLink } from '../MenuLink';
import { ButtonLink } from '../ButtonLink';

export function Menu({ children }) {
  return (
    <Container>
      <ChildrenContainer>
        {children}
      </ChildrenContainer>
      <LogoContainer>
        <h2>ElianaViana Coach</h2>
      </LogoContainer>
      <ButtonsContainer>
        <ButtonLink>
          Agendar sessão
        </ButtonLink>
        <MenuLink link="/" local="BLOG" />
        <div>
          <AiFillInstagram size="16" />
          <AiFillFacebook />
        </div>
      </ButtonsContainer>
    </Container>
  );
}

Menu.propTypes = {
  children: P.node.isRequired,
};
