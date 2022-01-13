import React from 'react';
import { Container, MainContent, MainContentGrid } from './styles';
import { EspecialidadesCard } from '../../components/EspecialidadesCard';
import { MenuContainer } from '../../components/Base';
import { Menu } from '../../components/Menu';
import { MenuLink } from '../../components/MenuLink';

export function AboutMe() {
  return (
    <Container>
      <MenuContainer>
        <Menu>
          <MenuLink local="HOME" link="/" />
          <MenuLink local="SOBRE MIM" link="/" />
          <MenuLink local="ESPECIALIDADES" link="/especialidades" />
        </Menu>
      </MenuContainer>
      <MainContent>
        <h1 className="main-title">(... mais sobre mim)</h1>
        <MainContentGrid>
          <EspecialidadesCard title="Exemplo1" subtitle="subtitulo de exemplo" buttontext="Ver mais" imglink="https://res.cloudinary.com/dh84pxwgu/image/upload/v1641778571/home-office_umo8ut.jpg" invert>
            The quickest path to burnout as an entrepreneur is working
            all the time and not taking care of yourself.
            In order to break your bad habits, you need a mentor
            who can help you self-correct and make yourself a priority.
            Well work together to build a customized wellness and self-care
            routine, and manage your mind around people-pleasing and putting
            others first.
          </EspecialidadesCard>
        </MainContentGrid>
      </MainContent>
    </Container>
  );
}
