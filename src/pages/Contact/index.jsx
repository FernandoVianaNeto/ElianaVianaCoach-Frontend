import React from 'react';
import { MdEmail } from 'react-icons/md';
import { AiOutlineWhatsApp, AiOutlineClockCircle } from 'react-icons/ai';
import { BiWorld } from 'react-icons/bi';
import { Container, MainContent, MainContentGrid } from './styles';

import { MenuContainer } from '../../components/Base';
import { Menu } from '../../components/Menu';
import { MenuLink } from '../../components/MenuLink';
import { Form } from '../../components/Form';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';

export function Contact() {
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
        <MainContentGrid>
          <div className="left-column">
            <h1>Fale com Eliana</h1>
            <p className="subtitle">Agende sua sessão ou sinta se a vontade para me contatar com qualquer dúvida que tenha surgido.</p>
            <Form>
              <Input placeholder="Seu nome" />
              <Input placeholder="Seu e-mail" />
              <TextArea placeholder="Mensagem" />
              <Button type="submit">Enviar</Button>
            </Form>
          </div>
          <div className="right-column">
            <h1 className="title">Ou se preferir fale comigo:</h1>
            <div className="contacts-container">
              <p>
                {' '}
                <MdEmail />
                {'  '}
                elianavianacoach@gmail.com
              </p>
              <p>
                {' '}
                <AiOutlineWhatsApp />
                {'  '}
                (17) 99999-9999
              </p>
              <p>
                {' '}
                <BiWorld />
                {'  '}
                Encontre me no ZenClub
              </p>
              <p>
                {' '}
                <AiOutlineClockCircle />
                {'  '}
                Estou disponível das 8h até as 19h
              </p>
            </div>
          </div>
        </MainContentGrid>
      </MainContent>
    </Container>
  );
}
