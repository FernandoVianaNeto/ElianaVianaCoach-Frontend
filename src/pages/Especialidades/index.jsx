import React, { useEffect, useState } from 'react';
// import P from 'prop-types';
import {
  Container, FirstView, EspecialidadesComponents, ContentFirstView, Questions,
  EspecialidadesGrid,
} from './styles';
import { MenuContainer } from '../../components/Base';
import { Menu } from '../../components/Menu';
import { MenuLink } from '../../components/MenuLink';
import { EspecialidadesCard } from '../../components/EspecialidadesCard';
import { Input } from '../../components/Input';
import { ButtonCall } from '../../components/ButtonCall';

export function Especialidades() {
  const [responsiveCard, setResponsiveCard] = useState(false);

  useEffect(() => {
    if (window.screen.width <= 768) {
      setResponsiveCard(true);
    }
  }, []);

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
            <h1>Cansado de se sentir perdido com os seus objetivos?</h1>
            <h3>Temos a sua solução</h3>
          </div>
          <div className="description">
            <p>
              Olá! Você é muito bem-vindo(a) Sinto um desejo ardente em desenvolver pessoas pois acredito que o mundo será muito melhor quando as pessoas começarem a se conhecer, se mapear, enfim, se ressignificar, por isso, tenho me debruçado nos estudos do autoconhecimento e desenvolvimento humano.

              Vivi uma fase muito difícil quando fui diagnosticada com um câncer de mama devastador! Hoje tudo que passei considero um case de sucesso pois consegui derrotar um gigante enorme através da minha fé! Através da Psicologia Positiva e ferramentas do Mindfulness iremos numa leve e gostosa trajetória com o objetivo de trabalhar suas emoções positivas, incorporar um mindset mais construtivo no que tange a comunicação e relacionamento intra e interpessoal.
            </p>
            <p>
              Vamos juntos exercitar comportamentos novos e que sejam mais compatíveis com os resultados que precisam ser alcançados.Te convido a identificar crenças limitantes e barreiras mentais que impendem a sua evolução e criam barreiras para conquistar novos patamares em sua carreira, liderança ou família.

              Nesta trajetória, uno Coaching e a Psicanálise Clínica promovendo e fortalecendo o autoconhecimento, favorecendo a definição do propósito e da missão; elementos que verdadeiramente dão sentido à nossa existência. Também te levo a potencializar seus talentos e competências, eliminando aspectos negativos da sua mentalidade e dos seus comportamentos, a ser mais positiva e, com isso, a construir melhores resultados em todos os setores da sua vida.
            </p>
          </div>
        </ContentFirstView>
      </FirstView>
      <EspecialidadesComponents>
        <EspecialidadesGrid>
          <EspecialidadesCard title="Orientação Profissional" subtitle="subtitulo de exemplo" buttontext="Ver mais" imglink="https://res.cloudinary.com/dh84pxwgu/image/upload/v1641778571/home-office_umo8ut.jpg" invert button>
            The quickest path to burnout as an entrepreneur is working
            all the time and not taking care of yourself.
            In order to break your bad habits, you need a mentor
            who can help you self-correct and make yourself a priority.
            Well work together to build a customized wellness and self-care
            routine, and manage your mind around people-pleasing and putting
            others first.
          </EspecialidadesCard>
          <EspecialidadesCard title="Psicanálise" subtitle="subtitulo de exemplo" buttontext="Ver mais" imglink="https://res.cloudinary.com/dh84pxwgu/image/upload/v1641778571/home-office_umo8ut.jpg" invert={responsiveCard} button>
            The quickest path to burnout as an entrepreneur is working
            all the time and not taking care of yourself.
            In order to break your bad habits, you need a mentor
            who can help you self-correct and make yourself a priority.
            Well work together to build a customized wellness and self-care
            routine, and manage your mind around people-pleasing and putting
            others first.
          </EspecialidadesCard>
          <EspecialidadesCard title="Coaching" subtitle="subtitulo de exemplo" buttontext="Ver mais" imglink="https://res.cloudinary.com/dh84pxwgu/image/upload/v1641778571/home-office_umo8ut.jpg" invert button>
            The quickest path to burnout as an entrepreneur is working
            all the time and not taking care of yourself.
            In order to break your bad habits, you need a mentor
            who can help you self-correct and make yourself a priority.
            Well work together to build a customized wellness and self-care
            routine, and manage your mind around people-pleasing and putting
            others first.
          </EspecialidadesCard>
        </EspecialidadesGrid>
      </EspecialidadesComponents>
      <Questions>
        <div className="left-column">
          <h1>Tem alguma dúvida? Tire ela aqui!</h1>
        </div>
        <div className="right-column">
          <Input
            placeholder="Qual a seu e-mail?"
          />
          <Input
            placeholder="Qual a sua dúvida?"
          />
          <ButtonCall type="submit">Enviar</ButtonCall>
        </div>

      </Questions>
    </Container>
  );
}

Especialidades.propTypes = {

};
