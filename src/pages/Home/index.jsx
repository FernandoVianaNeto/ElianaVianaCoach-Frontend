import React, { useState } from 'react';
import { RiFootprintFill } from 'react-icons/ri';
import { GrLinkNext } from 'react-icons/gr';
import { Menu } from '../../components/Menu';
import { MenuLink } from '../../components/MenuLink';
import {
  Container, FirstView, AboutMe, ThreeGridTemplate, MenuContainer, EspecialidadesMenu,
  EspecialidadesGrid, Testimonys, TestimonyGrid, Schedule,
} from './styles';
import { WorkCard } from '../../components/WorkCard';
import { TestimonyCard } from '../../components/TestimonyCard';
import { ButtonLink } from '../../components/ButtonLink';

export function Home() {
  const [testimony1, setTestimony1] = useState(true);
  const [testimony2, setTestimony2] = useState(false);
  const [testimony3, setTestimony3] = useState(false);

  function handleChangeTestimony() {
    if (testimony1 === true) {
      setTestimony1(false);
      setTestimony2(true);
    } else if (testimony2 === true) {
      setTestimony2(false);
      setTestimony3(true);
    } else {
      setTestimony1(true);
      setTestimony3(false);
    }
  }

  return (
    <Container>
      {/* <img src="https://res.cloudinary.com/dh84pxwgu/image/upload/v1623179162/small_pexels_photo_3171837_bbf66f242c.jpg" alt="first view background" /> */}
      <MenuContainer>
        <Menu>
          <MenuLink local="HOME" link="/" />
          <MenuLink local="SOBRE MIM" link="/" />
          <MenuLink local="ESPECIALIDADES" link="/especialidades" />
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
            <ButtonLink href="/">
              Dê o primeiro passo
              {' '}
              <RiFootprintFill />
            </ButtonLink>
          </div>
        </div>
      </FirstView>
      <AboutMe>
        <div className="subpage-introduction">
          <h1 className="title">Conheça Eliana</h1>
          <small>Sua Coach que te guiará ao sucesso</small>
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
            <ButtonLink href="/especialidades">SAIBA MAIS SOBRE MIM</ButtonLink>
          </div>
        </ThreeGridTemplate>
      </AboutMe>
      <EspecialidadesMenu>
        <h1 className="title">Como é o meu trabalho?</h1>
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
        <div className="footer"><ButtonLink href="/especialidades">SAIBA MAIS</ButtonLink></div>
      </EspecialidadesMenu>
      <Testimonys>
        <TestimonyGrid>
          <div className="left-column">
            <h1 className="title">O que meus clientes falam de mim?</h1>
            {testimony1 === true && (
              <TestimonyCard name="Fernando">
                <p>
                  Sylvie helped me see that I was heading for burnout at a
                  breakneck pace. I needed to slow down and start taking better
                  care of myself, because my business was paying the consequences.
                  I couldnt focus, I had no clue what direction I was going,
                  and I hated sitting down to work. With Sylvies guidance,
                  I was able to create a health and wellness routine that
                  includes me, me, and more me. I make the right food choices,
                  get enough sleep, and move my body everyday. As a result,
                  my business has never been better.
                  I work hard and love every minute of it, instead of dreading work days.
                </p>
              </TestimonyCard>
            )}
            {testimony2 === true && (
              <TestimonyCard name="Fernando1">
                <p>
                  Sylvie helped me see that I was heading for burnout at a
                  breakneck pace. I needed to slow down and start taking better
                  care of myself, because my business was paying the consequences.
                  I couldnt focus, I had no clue what direction I was going,
                  and I hated sitting down to work. With Sylvies guidance,
                  I was able to create a health and wellness routine that
                  includes me, me, and more me. I make the right food choices,
                  get enough sleep, and move my body everyday. As a result,
                  my business has never been better.
                  I work hard and love every minute of it, instead of dreading work days.
                </p>
              </TestimonyCard>
            )}
            {testimony3 === true && (
              <TestimonyCard name="Fernando2">
                <p>
                  Sylvie helped me see that I was heading for burnout at a
                  breakneck pace. I needed to slow down and start taking better
                  care of myself, because my business was paying the consequences.
                  I couldnt focus, I had no clue what direction I was going,
                  and I hated sitting down to work. With Sylvies guidance,
                  I was able to create a health and wellness routine that
                  includes me, me, and more me. I make the right food choices,
                  get enough sleep, and move my body everyday. As a result,
                  my business has never been better.
                  I work hard and love every minute of it, instead of dreading work days.
                </p>
              </TestimonyCard>
            )}
            <div className="button-container">
              <button type="button" onClick={handleChangeTestimony}>
                Ver mais
                {' '}
                <GrLinkNext />
              </button>
            </div>
          </div>
          <div className="img-container">
            <img src="https://res.cloudinary.com/dh84pxwgu/image/upload/v1641778571/home-office_umo8ut.jpg" alt="coach" />
          </div>

        </TestimonyGrid>
      </Testimonys>
      <Schedule>
        <h3>Sua vida não está da forma como gostaria?</h3>
        <h1 className="title">Venha conversar comigo</h1>
        <ButtonLink>Buscar ajuda</ButtonLink>
      </Schedule>
    </Container>
  );
}
