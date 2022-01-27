import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    min-height: 100vh;
    background-color: ${theme.colors.primaryColor};
    max-width: 100vw;
    margin: 0px;
    padding: 0px;
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

    @media ${theme.media.lteMedium} {
      margin: 0px;
      padding: 0px;
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
  ${() => css`
    padding: 50px;
  `}
`;
