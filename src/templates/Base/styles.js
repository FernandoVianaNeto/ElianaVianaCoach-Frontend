import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.secundaryColor};
    min-height: 100vh;
  `}
`;

export const MenuContainer = styled.div`
  ${() => css`
    padding: 20px 100px;
  `}
`;

export const Content = styled.div`
  ${() => css`
    
  `}
`;
