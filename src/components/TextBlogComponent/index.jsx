import React from 'react';
import P from 'prop-types';
import { AiOutlineExpandAlt, AiOutlineEdit } from 'react-icons/ai';
import { FiTrash } from 'react-icons/fi';
import { Container, ButtonContainer } from './styles';

export function TextBlogComponent({
  title, description, date, tags,
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
        <FiTrash />
        <AiOutlineEdit />
      </ButtonContainer>
    </Container>
  );
}

TextBlogComponent.propTypes = {
  title: P.string.isRequired,
  date: P.string.isRequired,
  description: P.string.isRequired,
  tags: P.string,
};

TextBlogComponent.defaultProps = {
  tags: 'Coach',
};
