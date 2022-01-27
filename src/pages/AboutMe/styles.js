import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    min-height: 100vh;
    background-color: ${theme.colors.primaryColor};
  `}
`;

export const MainContent = styled.main`
  ${({ theme }) => css`
    margin: 100px;
    padding: 25px;

    .main-title {
      text-align: center;
      font-family: ${theme.font.family.titleFont};
      font-size: 44px;
      color :${theme.colors.fourthColor};
      transform: rotate(-2deg);
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

export const AboutMeDescription = styled.div`
  ${({ theme }) => css`
    min-height: 100vh;
    background-color: ${theme.colors.secundaryColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
    padding: 50px;

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
