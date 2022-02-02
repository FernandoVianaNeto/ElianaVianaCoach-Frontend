import React, { useState, useEffect } from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import {
  Container, Section, Filter, Texts,
} from './styles';

import urlConfig from '../../../baseURL.json';
import api from '../../../api/api';

import { ButtonLink } from '../../../components/ButtonLink';
import { TestimonyBackOfficeCard } from '../../../components/TestimonyBackOfficeCard';

export function Testimonys() {
  const [depoimentos, setDepoimentos] = useState([]);
  const { localStorage } = window;

  useEffect(() => {
    const tokenHash = JSON.parse(localStorage.getItem('token'));
    api.defaults.headers.authorization = `Bearer ${tokenHash}`;

    if (!tokenHash) {
      window.location.href = `${urlConfig.frontendURL}/blog/login`;
    }
  }, []);

  useEffect(() => {
    api.get(`${urlConfig.baseURL}/depoimentos`)
      .then(async (response) => {
        setDepoimentos(response.data);
      });
  }, []);

  return (
    <Container>
      <Section>
        <Filter>
          <a href="/blog/gerenciamento">Textos</a>
          <a href="/blog/gerenciamento">Depoimentos</a>
          <a href="/blog/gerenciamento">Pedidos de orçamento</a>
          <a href="/blog/gerenciamento/clientes">Clientes</a>
        </Filter>
        <Texts>
          <header>
            <h1>Todos os clientes:</h1>
            <ButtonLink>
              Adicionar novo cliente
              {' '}
              <AiOutlineUserAdd />
            </ButtonLink>
          </header>

          {
            depoimentos.map((depoimento) => (
              <TestimonyBackOfficeCard
                key={depoimento.id}
                name={depoimento.name}
                title={depoimento.title}
                description={depoimento.description}
                date={depoimento.date}
                id={depoimento.id}
              />
            ))
          }
        </Texts>
      </Section>
    </Container>
  );
}
