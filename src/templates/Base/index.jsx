import React from 'react';
import P from 'prop-types';
import { Container, Content, MenuContainer } from './styles';

import { Menu } from '../../components/Menu';
import { MenuLink } from '../../components/MenuLink';

export function Base({ children }) {
  return (
    <Container>
      <MenuContainer>
        <Menu>
          <MenuLink local="HOME" link="/" />
          <MenuLink local="SOBRE MIM" link="/" />
          <MenuLink local="ESPECIALIDADES" link="/especialidades" />
        </Menu>
      </MenuContainer>
      <Content>
        {children}
      </Content>
    </Container>
  );
}

Base.propTypes = {
  children: P.node.isRequired,
};
