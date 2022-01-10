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

export const MenuContainer = styled.div`
  ${() => css`
    padding: 20px 100px;

  `}
`;

// Styles das subpages

export const FirstView = styled.main`
  ${({ theme }) => css`
    min-height: 80vh;

    .column-left {
      display: flex; 
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
      height: 300px;
      margin: 30px 70px;
      padding: 50px;

      .call-text {
        max-width: 500px;
        margin: 50px;

        h1 {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          margin-top: 10px; 
          font-family: 'Mukta';
          /* font-family: ${theme.font.family.primaryFont}; */
          color: ${theme.colors.primaryColor};
          padding: 4px 8px;
        }
      }

      .button-container {
        margin: 0px 50px;
        display: flex;
        align-items: center;
      }
    }
  `}
`;

export const AboutMe = styled.div`
  ${({ theme }) => css`
    min-height: 100vh;
    padding: 40px 100px;
    font-size: 24px;
    
    h1 {
      color: ${theme.colors.fourthColor};
      font-family: 'Licorice';
    }
  `}
`;

// Style dos elementos utilizados

export const ThreeGridTemplate = styled.div`
  ${() => css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 32px 0px;
  `}
`;
