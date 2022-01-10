import React from 'react';
import { RiFootprintFill } from 'react-icons/ri';
import { Menu } from '../../components/Menu';
import { MenuLink } from '../../components/MenuLink';
import {
  Container, FirstView, AboutMe, ThreeGridTemplate, MenuContainer,
} from './styles';
import { ButtonCall } from '../../components/ButtonCall';

export function Home() {
  return (
    <Container>
      {/* <img src="https://res.cloudinary.com/dh84pxwgu/image/upload/v1623179162/small_pexels_photo_3171837_bbf66f242c.jpg" alt="first view background" /> */}
      <MenuContainer>
        <Menu>
          <MenuLink local="HOME" link="/" />
          <MenuLink local="SOBRE MIM" link="/" />
          <MenuLink local="ESPECIALIDADES" link="/" />
        </Menu>
      </MenuContainer>
      <FirstView>
        <div className="column-left">
          <div className="call-text">
            <h1>
              EU AJUDO PESSOAS
            </h1>
            <h1>
              À MUDAREM
            </h1>
            <h1>
              O RUMO DA SUA VIDA
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
      </FirstView>
      <AboutMe>
        <h1 className="wave">Conheça Eliana</h1>
        <ThreeGridTemplate>
          <div className="call-grid">
            <p>O que eliana faz, com o que trabalha e uma chamada rápida</p>
          </div>
          <div className="image-grid">
            3 ou 4 imagens sobre eliana trabalhando
          </div>
          <div className="description-grid">
            Descrição rápida sobre eliana
          </div>
        </ThreeGridTemplate>
      </AboutMe>
    </Container>
  );
}
