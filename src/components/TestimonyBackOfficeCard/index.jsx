/* eslint-disable no-alert */
/* eslint-disable quote-props */
import React from 'react';
import P from 'prop-types';
import { AiOutlineExpandAlt, AiOutlineEdit } from 'react-icons/ai';
import { FiTrash } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, ButtonContainer } from './styles';
import api from '../../api/api';
import urlConfig from '../../baseURL.json';

export function TestimonyBackOfficeCard({
  date, id, name, title, description,
}) {
  function handleDeleteText() {
    if (window.confirm('Você realmente deseja excluir esse cliente?')) {
      if (window.confirm('Lembre que essa é uma ação que não tem mais volta')) {
        api.post(`/deletardepoimento/${id}`)
          .then(() => {
            window.location.href = `${urlConfig.frontendURL}/blog/gerenciamento/depoimentos`;
          });
      }
    }
  }

  return (
    <Container>
      <p>
        <span>Nome:</span>
        {' '}
        {name}
      </p>
      <p>
        <span>Título:</span>
        {' '}
        {title}
      </p>
      <p>
        <span>Descrição:</span>
        {' '}
        {description}
      </p>
      <p>
        <span>Data:</span>
        {' '}
        {date}
      </p>
      <ButtonContainer>
        <AiOutlineExpandAlt />
        <button type="button" onClick={() => handleDeleteText()}><FiTrash /></button>
        <Link to={`/blog/editarcliente/${id}`}><AiOutlineEdit /></Link>
      </ButtonContainer>
    </Container>
  );
}

TestimonyBackOfficeCard.propTypes = {
  name: P.string.isRequired,
  title: P.string.isRequired,
  description: P.string.isRequired,
  date: P.string.isRequired,
  id: P.string.isRequired,
};
