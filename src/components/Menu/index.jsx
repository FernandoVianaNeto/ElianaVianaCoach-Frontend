import React from 'react';
import P from 'prop-types';
import { AiFillInstagram, AiFillFacebook, AiOutlineWhatsApp } from 'react-icons/ai';

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
        <ButtonLink href="/contato">
          Agendar sessão
        </ButtonLink>
        <MenuLink link="/" local="BLOG" />
        <MenuLink link="/contato" local="CONTATO" />
        <div className="social-media-container">
          <a href="/"><AiFillInstagram /></a>
          <a href="/"><AiFillFacebook /></a>
          <a href="/"><AiOutlineWhatsApp /></a>
        </div>
      </ButtonsContainer>
    </Container>
  );
}

Menu.propTypes = {
  children: P.node.isRequired,
};
