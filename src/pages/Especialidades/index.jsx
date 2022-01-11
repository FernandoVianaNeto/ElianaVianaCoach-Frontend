import React from 'react';
// import P from 'prop-types';
import {
  Container, FirstView, EspecialidadesComponents, ContentFirstView,
} from './styles';
import { MenuContainer } from '../../components/Base';
import { Menu } from '../../components/Menu';
import { MenuLink } from '../../components/MenuLink';
import { EspecialidadesCard } from '../../components/EspecialidadesCard';

export function Especialidades() {
  return (
    <Container>
      <FirstView>
        <img src="https://res.cloudinary.com/dh84pxwgu/image/upload/v1641778571/home-office_umo8ut.jpg" alt="fundo" />
        <MenuContainer>
          <Menu>
            <MenuLink local="HOME" link="/" />
            <MenuLink local="SOBRE MIM" link="/" />
            <MenuLink local="ESPECIALIDADES" link="/especialidades" />
          </Menu>
        </MenuContainer>
        <ContentFirstView>
          <div className="title">
            <h1>Cansado de se sentir perdido com os seus objetivos?</h1>
            <h3>Temos a sua solução</h3>
          </div>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
              exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
              commodo consequat. Duis autem vel eum iriure dolor in hendrerit
              in vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud
              exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
              commodo consequat. Duis autem vel eum iriure dolor in hendrerit
              in vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent.
            </p>
          </div>
        </ContentFirstView>
      </FirstView>
      <EspecialidadesComponents>
        <EspecialidadesCard title="Exemplo1" subtitle="subtitulo de exemplo" buttontext="Ver mais" imglink="https://res.cloudinary.com/dh84pxwgu/image/upload/v1641778571/home-office_umo8ut.jpg">
          The quickest path to burnout as an entrepreneur is working
          all the time and not taking care of yourself.
          In order to break your bad habits, you need a mentor
          who can help you self-correct and make yourself a priority.
          Well work together to build a customized wellness and self-care
          routine, and manage your mind around people-pleasing and putting
          others first.
        </EspecialidadesCard>
      </EspecialidadesComponents>
    </Container>
  );
}

Especialidades.propTypes = {

};
