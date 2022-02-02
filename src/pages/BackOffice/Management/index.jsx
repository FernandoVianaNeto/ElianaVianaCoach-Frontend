import React, { useState, useEffect } from 'react';
import {
  Container, Section, Filter, Texts,
} from './styles';
import urlConfig from '../../../baseURL.json';
import { TextBlogComponent } from '../../../components/TextBlogComponent';
import api from '../../../api/api';

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
          <button type="button">Textos</button>
          <button type="button">Depoimentos</button>
          <button type="button">Pedidos de orçamento</button>
        </Filter>
        <Texts>
          <h1>Todos os textos:</h1>
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
