import React from 'react';
import P from 'prop-types';
import * as Styled from './styles';

export function AboutMe({ children }) {
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  );
}

AboutMe.propTypes = {
  children: P.node.isRequired,
};
