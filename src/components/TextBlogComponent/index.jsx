import React from 'react';
import P from 'prop-types';
import { Container } from './styles';

export function TextBlogComponent({
  title, description, date, tags,
}) {
  return (
    <Container>
      <p>{title}</p>
      <p>{description}</p>
      <p>{date}</p>
      <p>{tags}</p>
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
