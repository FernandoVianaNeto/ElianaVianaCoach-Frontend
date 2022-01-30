import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineInstagram, AiOutlineFacebook } from 'react-icons/ai';
import {
  Container, Header, ButtonContainer, SocialMediaContainer,
} from './styles';
import { ButtonLink } from '../../components/ButtonLink';

export function ThankYouPage() {
  return (
    <Container>
      <Header>
        <h1>ElianaViana Coach</h1>
      </Header>
      <h1 className="call-text">Muito obrigada por entrar em contato conosco!</h1>
      <h2>Fico muito agradecida de ter o privilégio de receber a sua mensagem</h2>
      <h3>Em breve estarei entrando em contato com você para acertarmos tudo!</h3>
      <ButtonContainer>
        <ButtonLink href="/">
          Página principal
        </ButtonLink>
        <ButtonLink href="/bloghome">
          Visitar o Blog
        </ButtonLink>
      </ButtonContainer>
      <SocialMediaContainer>
        <p>Venha se conectar comigo!</p>
        <div>
          <Link to="/">
            <AiOutlineInstagram />
          </Link>
          <Link to="/">
            <AiOutlineFacebook />
          </Link>
        </div>
      </SocialMediaContainer>
    </Container>
  );
}
