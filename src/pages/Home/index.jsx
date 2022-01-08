import React from 'react';
import { Menu } from '../../components/Menu';
import { MenuLink } from '../../components/MenuLink';
import { Container, FirstView } from './styles';
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
      <FirstView>
        <div className="column-left">
          <div className="call-text">
            <h1>
              Dê o primeiro passo
            </h1>
            <h1>
              para mudar
            </h1>
            <h1>
              o rumo da sua vida
            </h1>
          </div>
        </div>
      </FirstView>
    </Container>
  );
}
