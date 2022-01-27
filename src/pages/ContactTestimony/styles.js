import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    min-height: 100vh;
    background-color: ${theme.colors.secundaryColor};
  `}
`;

export const MainContent = styled.div`
  ${() => css`
    height: 50vh;
    margin: 0 auto;
  `}
`;

// Elementos

export const MainContentGrid = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 100px 0px;

    .title {
      transform: rotate(-2deg);
    }

    .left-column {
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      background-color: ${theme.colors.complementarColor};
      padding: 30px 66px 30px 50px;
      border-radius: 4px;

      h1 {
        font-family: ${theme.font.family.titleFont};
        font-size: 36px;
        color :${theme.colors.fourthColor};
      }

      p {
        font-family: ${theme.font.family.primaryFont};
        max-width: 400px;
        color: ${theme.colors.fifthColor};
      }
    }

    .right-column {
      height: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      background-color: ${theme.colors.fifthColor};
      padding: 30px;
      border-radius: 4px;

      .contacts-container {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 100%;
        gap: 20px;
      }
      
      .title {
        color: ${theme.colors.primaryColor};
        font-family: ${theme.font.family.titleFont};
        font-size: 36px;
      }

      p {
        font-family: ${theme.font.family.primaryFont};
        color: ${theme.colors.primaryColor};
        display: flex;
        align-items: center;
        gap: 10px;
      }
    }

    @media ${theme.media.lteMedium} {
      display: flex;
      flex-direction: column;
      padding: 50px;
      margin-top: 0px;
    }
  `}
`;
