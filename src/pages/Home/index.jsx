import React from 'react';
import { RiFootprintFill } from 'react-icons/ri';
import { Menu } from '../../components/Menu';
import { MenuLink } from '../../components/MenuLink';
import { Container, FirstView } from './styles';
import { ButtonCall } from '../../components/ButtonCall';

export function Home() {
  return (
    <Container>
      <img src="https://res.cloudinary.com/dh84pxwgu/image/upload/v1623179162/small_pexels_photo_3171837_bbf66f242c.jpg" alt="first view background" />
      <FirstView>
        <Menu>
          <MenuLink local="HOME" link="/" />
          <MenuLink local="SOBRE MIM" link="/" />
          <MenuLink local="ESPECIALIDADES" link="/" />
        </Menu>
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
      </FirstView>
    </Container>
  );
}
