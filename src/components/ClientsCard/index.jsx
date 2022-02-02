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

export function ClientsCard({
  email, id, know, name, phone,
}) {
  function handleDeleteText() {
    if (window.confirm('Você realmente deseja excluir esse cliente?')) {
      if (window.confirm('Lembre que essa é uma ação que não tem mais volta')) {
        api.post(`/deletarcliente/${id}`)
          .then(() => {
            window.location.href = `${urlConfig.frontendURL}/blog/gerenciamento/clientes`;
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
        <span>E-mail:</span>
        {' '}
        {email}
      </p>
      <p>
        <span>Conheceu:</span>
        {' '}
        {know}
      </p>
      <p>
        <span>Telefone:</span>
        {' '}
        {phone}
      </p>
      <ButtonContainer>
        <AiOutlineExpandAlt />
        <button type="button" onClick={() => handleDeleteText()}><FiTrash /></button>
        <Link to={`/blog/editarcliente/${id}`}><AiOutlineEdit /></Link>
      </ButtonContainer>
    </Container>
  );
}

ClientsCard.propTypes = {
  phone: P.string.isRequired,
  name: P.string.isRequired,
  know: P.string.isRequired,
  email: P.string.isRequired,
  id: P.string.isRequired,
};
