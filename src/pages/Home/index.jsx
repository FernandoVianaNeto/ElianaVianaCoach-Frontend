import React from 'react';
import { RiFootprintFill } from 'react-icons/ri';
import { Menu } from '../../components/Menu';
import { MenuLink } from '../../components/MenuLink';
import {
  Container, FirstView, AboutMe, ThreeGridTemplate, MenuContainer, EspecialidadesMenu,
  EspecialidadesGrid,
} from './styles';
import { ButtonCall } from '../../components/ButtonCall';
import { WorkCard } from '../../components/WorkCard';

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
        <div className="subpage-introduction">
          <h1 className="title">Conheça Eliana</h1>
          <small>Sua futura Coach que te guiará ao sucesso</small>
        </div>

        <ThreeGridTemplate>
          <div className="call-grid">
            <div>
              <h1 className="subtitle">COACH E PSICANALISTA</h1>
            </div>
            <div>
              <p>COACH PROFISSIONAL E DE VIDA</p>
              <p>25 ANOS DE EXPERIÊNCIA GERENCIANDO PESSOAS</p>
              <p>ESPECIALISTA EM ...</p>
            </div>

          </div>
          <div className="image-grid">
            <img src="https://res.cloudinary.com/dh84pxwgu/image/upload/v1641778571/home-office_umo8ut.jpg" alt="home office" />
            <img src="https://res.cloudinary.com/dh84pxwgu/image/upload/v1641778972/meeting_iid821.jpg" alt="meeting" />
            <img src="https://res.cloudinary.com/dh84pxwgu/image/upload/v1641779003/results_wvfgqw.jpg" alt="results" />
          </div>
          <div className="description-grid">
            <h1>Quem é Eliana?</h1>
            <p>
              Graduada em Administração, MBA em Liderança e Coach ,
              25 anos de experiência em liderança, desenvolvimento
              humano, gestão de pessoas.
              Me proponho a ajudar você a mergulhar no autoconhecimento,
              entendendo seus limites, ganhando autoconfiança,
              aprendendo com os erros e alavancando sua vida e carreira.
            </p>
            <ButtonCall type="button">SAIBA MAIS SOBRE MIM</ButtonCall>
          </div>
        </ThreeGridTemplate>
      </AboutMe>
      <EspecialidadesMenu>
        <h1 className="title">Como é o meu trabalho</h1>
        <EspecialidadesGrid>
          <WorkCard imglink="https://res.cloudinary.com/dh84pxwgu/image/upload/v1641778571/home-office_umo8ut.jpg" imgalt="work" title="Work">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam erat volutpat. Ut wisi enim ad minim veniam,
              quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
              aliquip ex ea commodo.
              {' '}
            </p>
          </WorkCard>
          <WorkCard imglink="https://res.cloudinary.com/dh84pxwgu/image/upload/v1641778571/home-office_umo8ut.jpg" imgalt="work" title="Work">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              sed diam nonummy nibh euismod tincidunt
              ut laoreet dolore magna aliquam erat volutpat.
              Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex
              ea commodo.
              {' '}
            </p>
          </WorkCard>
          <WorkCard imglink="https://res.cloudinary.com/dh84pxwgu/image/upload/v1641778571/home-office_umo8ut.jpg" imgalt="work" title="Work">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
              quis nostrud exerci tation ullamcorper suscipit lobortis nisl
              ut aliquip ex ea commodo.
            </p>
          </WorkCard>
        </EspecialidadesGrid>
        <div className="footer"><ButtonCall>SAIBA MAIS</ButtonCall></div>
      </EspecialidadesMenu>
    </Container>
  );
}
