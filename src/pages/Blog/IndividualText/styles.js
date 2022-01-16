import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    min-height: 100vh;
    background-color: ${theme.colors.primaryColor};
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColor};
    text-align: center;
    padding: 50px;
    
    h1 {
      font-family: ${theme.font.family.titleFont};
      color: ${theme.colors.fourthColor};
      font-size: 52px;
    }
  `}
`;

// Elementos da página

export const ContentGrid = styled.div`
  ${({ theme }) => css`
    min-height: 100vh;
    background-color: ${theme.colors.primaryColor};
    display: flex;

    .text-side {
      padding: 50px;
      text-align: justify;
    }

    .left-column {
      padding: 50px;
    }

    img {
      border-radius: 4px;
      height: 300px;
    }

  `}
`;
