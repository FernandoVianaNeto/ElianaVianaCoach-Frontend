import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    min-height: 100vh;
  `}
`;

export const MainContent = styled.main`
  ${({ theme }) => css`
    margin: 100px;
    padding: 25px;
    background-color: ${theme.colors.secundaryColor};

    .main-title {
      text-align: center;
      font-family: ${theme.font.family.titleFont};
      font-size: 44px;
      color :${theme.colors.fourthColor};
    }

    .description {
      display: flex;
      flex-direction: column;
      align-items : center;
      justify-content: center;
      gap: 30px;
      text-align: justify;
      font-family: ${theme.font.family.primaryFont};
      color: ${theme.colors.fifthColor};
      margin: 25px;
      max-width: 600px;

      h3 {
        color: ${theme.colors.fourthColor};
      }
    }
  `}
`;

// Elementos

export const MainContentGrid = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: 50px;

    .image-grid {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      img {
        width: 400px;
        height: 300px;
        box-shadow: 0 0 2em ${theme.colors.primaryColor};
        border-radius: 4px;
      }
    }
  `}
`;
