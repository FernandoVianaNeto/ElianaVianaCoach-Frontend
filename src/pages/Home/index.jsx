import React from 'react';
import { RiFootprintFill } from 'react-icons/ri';
import { Menu } from '../../components/Menu';
import { MenuLink } from '../../components/MenuLink';
import { Container, FirstView } from './styles';
import { ButtonLink } from '../../components/ButtonLink';
import { ButtonCall } from '../../components/ButtonCall';
import Foto from '../../assets/Logo.jpeg';

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
          <div className="button-container">
            <ButtonCall type="button">
              Dê o primeiro passo
              {' '}
              <RiFootprintFill />
            </ButtonCall>
          </div>
        </div>
        <div className="column-right">
          <img src={Foto} alt="logo foto" />
        </div>
      </FirstView>
    </Container>
  );
}
