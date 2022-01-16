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
    
    .text-title {
      font-family: ${theme.font.family.titleFont};
      color: ${theme.colors.fourthColor};
      font-size: 52px;
      transform: rotate(-2deg);
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
      display: flex;
      flex-direction: column;
      gap: 20px;

      padding: 50px;

      h2 {
        font-family: ${theme.font.family.titleFont};
        color: ${theme.colors.fourthColor};
      }
    }

    .img-text {
      border-radius: 4px;
      height: 300px;
    }

  `}
`;
