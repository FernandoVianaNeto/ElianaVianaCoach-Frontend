import React, { useEffect, useState } from 'react';
// import P from 'prop-types';
import { BsSearch } from 'react-icons/bs';
import {
  Container, FirstView, TextsView, ContentFirstView,
  TextsViewGrid, SearchBox,
} from './styles';
import { MenuContainer } from '../../../components/Base';
import { Menu } from '../../../components/Menu';
import { MenuLink } from '../../../components/MenuLink';
import { EspecialidadesCard } from '../../../components/EspecialidadesCard';
import { Input } from '../../../components/Input';

export function HomeBlog() {
  const [responsive, setResponsive] = useState(false);

  useEffect(() => {
    if (window.screen.width <= 768) {
      setResponsive(true);
    } else {
      setResponsive(false);
    }
  }, []);

  return (
    <Container>
      <img src="https://res.cloudinary.com/dh84pxwgu/image/upload/v1641778571/home-office_umo8ut.jpg" alt="fundo" className="img-background" />
      <MenuContainer>
        <Menu>
          <MenuLink local="HOME" link="/" />
          <MenuLink local="SOBRE MIM" link="/" />
          <MenuLink local="ESPECIALIDADES" link="/especialidades" />
        </Menu>
      </MenuContainer>
      <FirstView>
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
        <SearchBox>
          <h1>Principais lançamentos</h1>
          <form action="">
            <Input
              placeholder="Procurar texto"
            />
            <button type="submit">
              <BsSearch />
            </button>
          </form>
        </SearchBox>
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
          <EspecialidadesCard title="Exemplo1" subtitle="subtitulo de exemplo" buttontext="Ver mais" imglink="https://res.cloudinary.com/dh84pxwgu/image/upload/v1641778571/home-office_umo8ut.jpg" invert={responsive} button>
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
