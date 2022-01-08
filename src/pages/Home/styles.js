import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.secundaryColor};
    min-height: 100vh;
    width: 100%;
  `}
`;

// Styles das subpages

export const FirstView = styled.main`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    .column-left {
      flex: 1;
      display: flex; 
      flex-direction: column;
      justify-content: space-around;
      height: 300px;
      margin: 30px 70px;
      padding: 50px;

      .call-text {
        max-width: 300px;

        h1 {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 10px; 
          background-color: ${theme.colors.fourthColor};
          font-family: ${theme.font.family.primaryFont};
          color: ${theme.colors.fifthColor};
          padding: 4px 8px;
        }
      }

      .button-container {
        display: flex;
      }
    }

    .column-right {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: blue;

      img {
        margin-right: 50px;
      }
    }
  `}
`;

// Style dos elementos utilizados
