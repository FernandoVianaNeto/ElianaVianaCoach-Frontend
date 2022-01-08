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
      margin: 30px;
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
    }

    .column-right {
      flex: 1;
    }
  `}
`;

// Style dos elementos utilizados
