import React, { useState, useEffect } from 'react';
import { AiOutlineFileAdd } from 'react-icons/ai';
import {
  Container, Section, Filter, Texts,
} from './styles';

import urlConfig from '../../../baseURL.json';
import api from '../../../api/api';

import { ButtonLink } from '../../../components/ButtonLink';
import { TextBlogComponent } from '../../../components/TextBlogComponent';

export function Management() {
  const [texts, setTexts] = useState([]);
  const [token, setToken] = useState('');

  const { localStorage } = window;

  useEffect(() => {
    const tokenHash = JSON.parse(localStorage.getItem('token'));

    if (!tokenHash) {
      window.location.href = `${urlConfig.frontendURL}/blog/login`;
    } else {
      setToken(tokenHash);
    }
  }, []);

  useEffect(() => {
    api.get(`${urlConfig.baseURL}/blogtexts`)
      .then(async (response) => {
        setTexts(response.data);
      });
  }, []);

  return (
    <Container>
      <Section>
        <Filter>
          <a href="/blog/gerenciamento">Textos</a>
          <a href="/blog/gerenciamento/depoimentos">Depoimentos</a>
          <a href="/blog/gerenciamento">Pedidos de orçamento</a>
          <a href="/blog/gerenciamento/clientes">Clientes</a>
        </Filter>
        <Texts>
          <header>
            <h1>Todos os textos:</h1>
            <ButtonLink>
              Adicionar novo texto
              {' '}
              <AiOutlineFileAdd />
            </ButtonLink>
          </header>

          {
            texts.map((text) => (
              <TextBlogComponent
                key={text.id}
                title={text.title}
                description={text.description}
                date={text.date}
                tags={text.tags}
                id={text.id}
                token={token}
              />
            ))
          }
        </Texts>
      </Section>
    </Container>
  );
}
