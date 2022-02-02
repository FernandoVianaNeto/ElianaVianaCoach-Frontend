import React, { useState, useEffect } from 'react';
import { AiOutlineUserAdd } from 'react-icons/ai';
import {
  Container, Section, Filter, Texts,
} from './styles';

import urlConfig from '../../../baseURL.json';
import api from '../../../api/api';

import { ButtonLink } from '../../../components/ButtonLink';
import { ClientsCard } from '../../../components/ClientsCard';

export function Clients() {
  const [clientes, setClientes] = useState([]);
  const { localStorage } = window;

  useEffect(() => {
    const tokenHash = JSON.parse(localStorage.getItem('token'));
    api.defaults.headers.authorization = `Bearer ${tokenHash}`;

    if (!tokenHash) {
      window.location.href = `${urlConfig.frontendURL}/blog/login`;
    }
  }, []);

  useEffect(() => {
    api.get(`${urlConfig.baseURL}/clientes`)
      .then(async (response) => {
        setClientes(response.data);
      });
  }, []);

  return (
    <Container>
      <Section>
        <Filter>
          <a href="/blog/gerenciamento">Textos</a>
          <a href="/blog/gerenciamento">Depoimentos</a>
          <a href="/blog/gerenciamento">Pedidos de orçamento</a>
          <a href="/blog/gerenciamento">Clientes</a>
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
            clientes.map((client) => (
              <ClientsCard
                key={client.id}
                name={client.name}
                email={client.email}
                know={client.know}
                phone={client.phone}
                id={client.id}
              />
            ))
          }
        </Texts>
      </Section>
    </Container>
  );
}
