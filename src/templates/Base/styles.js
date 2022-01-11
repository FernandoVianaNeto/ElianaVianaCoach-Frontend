import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
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
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 30px;
  `}
`;
