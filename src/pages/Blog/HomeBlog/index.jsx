import React from 'react';
// import P from 'prop-types';
import {
  Container, FirstView, TextsView, ContentFirstView,
  TextsViewGrid,
} from './styles';
import { MenuContainer } from '../../../components/Base';
import { Menu } from '../../../components/Menu';
import { MenuLink } from '../../../components/MenuLink';
import { EspecialidadesCard } from '../../../components/EspecialidadesCard';

export function HomeBlog() {
  return (
    <Container>
      <FirstView>
        <img src="https://res.cloudinary.com/dh84pxwgu/image/upload/v1641778571/home-office_umo8ut.jpg" alt="fundo" className="img-background" />
        <MenuContainer>
          <Menu>
            <MenuLink local="HOME" link="/" />
            <MenuLink local="SOBRE MIM" link="/" />
            <MenuLink local="ESPECIALIDADES" link="/especialidades" />
          </Menu>
        </MenuContainer>
        <ContentFirstView>
          <div className="title">
            <h1>
              Bem vindo(a) ao meu blog!
            </h1>
            <h3>
              Aqui você terá acesso aos meus
              textos autorais, onde eu te ajudo a entender um pouco mais sobre
              como o coach pode auxiliar a sua vida!
            </h3>
          </div>
        </ContentFirstView>
      </FirstView>
      <TextsView>
        <TextsViewGrid>
          <EspecialidadesCard title="Exemplo1" subtitle="subtitulo de exemplo" buttontext="Ver mais" imglink="https://res.cloudinary.com/dh84pxwgu/image/upload/v1641778571/home-office_umo8ut.jpg" invert button>
            The quickest path to burnout as an entrepreneur is working
            all the time and not taking care of yourself.
            In order to break your bad habits, you need a mentor
            who can help you self-correct and make yourself a priority.
            Well work together to build a customized wellness and self-care
            routine, and manage your mind around people-pleasing and putting
            others first.
          </EspecialidadesCard>
          <EspecialidadesCard title="Exemplo1" subtitle="subtitulo de exemplo" buttontext="Ver mais" imglink="https://res.cloudinary.com/dh84pxwgu/image/upload/v1641778571/home-office_umo8ut.jpg" button>
            The quickest path to burnout as an entrepreneur is working
            all the time and not taking care of yourself.
            In order to break your bad habits, you need a mentor
            who can help you self-correct and make yourself a priority.
            Well work together to build a customized wellness and self-care
            routine, and manage your mind around people-pleasing and putting
            others first.
          </EspecialidadesCard>
          <EspecialidadesCard title="Exemplo1" subtitle="subtitulo de exemplo" buttontext="Ver mais" imglink="https://res.cloudinary.com/dh84pxwgu/image/upload/v1641778571/home-office_umo8ut.jpg" invert button>
            The quickest path to burnout as an entrepreneur is working
            all the time and not taking care of yourself.
            In order to break your bad habits, you need a mentor
            who can help you self-correct and make yourself a priority.
            Well work together to build a customized wellness and self-care
            routine, and manage your mind around people-pleasing and putting
            others first.
          </EspecialidadesCard>
        </TextsViewGrid>
      </TextsView>
    </Container>
  );
}
