import React, { useState } from 'react';
import { RiFootprintFill } from 'react-icons/ri';
import { GrLinkNext } from 'react-icons/gr';
import { Menu } from '../../components/Menu';
import { MenuLink } from '../../components/MenuLink';
import { MenuContainer } from '../../components/Base';
import {
  Container, FirstView, AboutMe, ThreeGridTemplate, EspecialidadesMenu,
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
      <img src="https://res.cloudinary.com/dh84pxwgu/image/upload/v1643371748/pexels-belle-co-1000445_sfq2fr.jpg" alt="first view background" className="background-image" />
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
            <ButtonLink href="/especialidades">
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
              <h1 className="subtitle">PSICANALISTA E COACH</h1>
            </div>
            <div>
              <p>25 ANOS DE EXPERIÊNCIA DESENVOLVENDO PESSOAS</p>
              <p>MAIS 5 MIL HORAS DE ATENDIMENTO</p>
              <p>EXPERIÊNCIA COM BURNOUT, DEPRESSÃO E ANSIEDADE</p>
              <p>TRABALHO O AUTOCONHECIMENTO, PROCRASTINAÇÃO E INTELIGÊNCIA EMOCIONAL</p>
              <p>TERAPIA DE CASAL</p>
              <p>ATENDIMENTO À BRASILEIROS NOS ESTADOS UNIDOS, EMIRADOS ÁRABES E FRANÇA</p>
            </div>
          </div>
          <div className="image-grid">
            <img src="https://res.cloudinary.com/dh84pxwgu/image/upload/v1641778571/home-office_umo8ut.jpg" alt="home office" />
            <img src="https://res.cloudinary.com/dh84pxwgu/image/upload/v1643053267/pexels-fauxels-3183150_vo3fx1.jpg" alt="meeting" />
            <img src="https://res.cloudinary.com/dh84pxwgu/image/upload/v1643053673/pexels-christina-morillo-1181533_nist2w.jpg" alt="results" />
          </div>
          <div className="description-grid">
            <h1>Quem é Eliana?</h1>
            <p>
              Mulher, empreendedora, graduada em Administração, MBA em Liderança e Coach ,
              25 anos de experiência em liderança, desenvolvimento
              humano, gestão de pessoas.
              Me proponho a ajudar você a mergulhar no autoconhecimento,
              entendendo seus limites, ganhando autoconfiança,
              aprendendo com os erros e alavancando sua vida e carreira.
            </p>
            <ButtonLink href="/maissobremim">SAIBA MAIS SOBRE MIM</ButtonLink>
          </div>
        </ThreeGridTemplate>
      </AboutMe>
      <EspecialidadesMenu>
        <h1 className="title">Como é o meu trabalho?</h1>
        <EspecialidadesGrid>
          <WorkCard imglink="https://res.cloudinary.com/dh84pxwgu/image/upload/v1641778571/home-office_umo8ut.jpg" imgalt="work" title="Orientação Profissional">
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna
              aliquam erat volutpat. Ut wisi enim ad minim veniam,
              quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
              aliquip ex ea commodo.
              {' '}
            </p>
          </WorkCard>
          <WorkCard imglink="https://res.cloudinary.com/dh84pxwgu/image/upload/v1643057242/pexels-alex-green-5699482_nf87zj.jpg" imgalt="work" title="Psicanálise">
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
          <WorkCard imglink="https://res.cloudinary.com/dh84pxwgu/image/upload/v1643057056/scott-graham-5fNmWej4tAA-unsplash_sczbax.jpg" imgalt="work" title="Coaching">
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
              <TestimonyCard name="Fran">
                <p>
                  Eliana com sua calma, paciência e inteligência me fez ver
                  coisas sobre mim mesma que eu nunca tinha visto.
                  Me deu aquele “empurrãozinho” que eu precisava pra
                  seguir meu caminho. Me fez refletir e me faz refletir
                  sobre diversos aspectos. Uma excelente profissional!
                  Quero continuar muitos anos com a ajuda dela em minha vida!
                </p>
              </TestimonyCard>
            )}
            {testimony2 === true && (
              <TestimonyCard name="Belizana">
                <p>
                  Estou em terapia com a Eliana a 3 meses e meio,
                  foram tantas mudanças de mindset, tantas percepções!
                  Que só posso agradecê-la por tantos aprendizados!!! RECOMENDO-A FORTEMENTE! Fale com ela!
                </p>
              </TestimonyCard>
            )}
            {testimony3 === true && (
              <TestimonyCard name="Thayna">
                <p>
                  Eliana tem uma energia linda de positividade e calma que
                  nos ajuda levar a vida de uma maneira mais leve, presente
                  e em paz. Depois de varias experiencias com outras terapias estou satisfeita com essa
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
        <div className="content">
          <h3>Sua vida não está da forma como gostaria?</h3>
          <h1 className="title">Venha conversar comigo</h1>
          <div className="button-container">
            <ButtonLink href="/contato">Buscar ajuda</ButtonLink>
          </div>
        </div>
      </Schedule>
    </Container>
  );
}
