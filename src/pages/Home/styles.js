import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    padding: 0;
    margin: 0;

    height: 100vh;
    z-index: 0;
    
    img {
      z-index: -1;
      position: absolute;
      width: 100vw;
      height: 100vh;
    }
  `}
`;

// Styles das subpages

export const FirstView = styled.main`
  ${({ theme }) => css`
    padding: 20px;
    .column-left {
      display: flex; 
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      height: 300px;
      margin: 30px 70px;
      padding: 50px;
      width: 300px;

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
        align-items: center;
      }
    }
  `}
`;

// Style dos elementos utilizados
