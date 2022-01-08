import React from 'react';
import { Menu } from '../../components/Menu';
import { MenuLink } from '../../components/MenuLink';
import { Container } from './styles';
import { ButtonLink } from '../../components/ButtonLink';

export function Home() {
  return (
    <Container>
      <Menu>
        <MenuLink local="Home" link="/" />
        <MenuLink local="Sobre mim" link="/" />
        <MenuLink local="Especialidades" link="/" />
        <ButtonLink>
          Agendar sessão
        </ButtonLink>
      </Menu>
    </Container>
  );
}
