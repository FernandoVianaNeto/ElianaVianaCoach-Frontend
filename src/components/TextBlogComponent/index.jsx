/* eslint-disable no-alert */
/* eslint-disable quote-props */
import React from 'react';
import P from 'prop-types';
import { AiOutlineExpandAlt, AiOutlineEdit } from 'react-icons/ai';
import { FiTrash } from 'react-icons/fi';
import { Container, ButtonContainer } from './styles';
import api from '../../api/api';
import urlConfig from '../../baseURL.json';

export function TextBlogComponent({
  title, description, date, tags, id,
}) {
  function handleDeleteText() {
    if (window.confirm('Você realmente deseja excluir esse texto?')) {
      if (window.confirm('Lembre que essa é uma ação que não tem mais volta')) {
        api.post(`/blog/deletetext/${id}`)
          .then(() => {
            window.location.href = `${urlConfig.frontendURL}/blog/gerenciamento`;
          });
      }
    }
  }

  return (
    <Container>
      <p>
        <span>Título:</span>
        {' '}
        {title}
      </p>
      <p>
        <span>Texto:</span>
        {' '}
        {description}
      </p>
      <p>
        <span>Data:</span>
        {' '}
        {date}
      </p>
      <p>
        <span>Tag:</span>
        {' '}
        {tags}
      </p>
      <ButtonContainer>
        <AiOutlineExpandAlt />
        <button type="button" onClick={() => handleDeleteText()}><FiTrash /></button>
        <AiOutlineEdit />
      </ButtonContainer>
    </Container>
  );
}

TextBlogComponent.propTypes = {
  title: P.string.isRequired,
  date: P.string.isRequired,
  description: P.string.isRequired,
  id: P.string.isRequired,
  // token: P.string.isRequired,
  tags: P.string,
};

TextBlogComponent.defaultProps = {
  tags: 'Coach',
};
