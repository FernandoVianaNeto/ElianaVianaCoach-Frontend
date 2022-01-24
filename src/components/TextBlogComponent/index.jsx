import React from 'react';
import P from 'prop-types';
import { AiOutlineExpandAlt, AiOutlineEdit } from 'react-icons/ai';
import { FiTrash } from 'react-icons/fi';
import { Container, ButtonContainer } from './styles';
import url from '../../baseURL.json';

export function TextBlogComponent({
  title, description, date, tags, id, token,
}) {
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
        <form action={`${url.baseURL}/blog/deletetext/${id}/${token}`} method="POST">
          <button type="submit"><FiTrash /></button>
        </form>
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
  tags: P.string,
  token: P.string.isRequired,
};

TextBlogComponent.defaultProps = {
  tags: 'Coach',
};
