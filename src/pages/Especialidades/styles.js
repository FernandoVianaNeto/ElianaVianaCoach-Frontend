import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    height: 100vh;

    .img-background {
      position: absolute;
      z-index: -1;
      opacity: 0.3;
      width: 100%;
      min-height: 100%;
    }
  `}
`;

export const FirstView = styled.div`
  ${({ theme }) => css`
    min-height: 60vh;
    width: 100%;
    margin: 0 auto;

    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 30px;

      h1 {
        font-family: ${theme.font.family.titleFont};
        font-size: 48px;
        color: ${theme.colors.fourthColor};
      }

      h3 {
        font-family: ${theme.font.family.secondaryFont};
        color: ${theme.colors.fourthColor};
      }
    } 

    .description {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
      margin: 70px;

      font-family: ${theme.font.family.primaryFont};
    }
  `}
`;

export const EspecialidadesComponents = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 20px;
    min-height: 100vh;
    background-color: ${theme.colors.secundaryColor};
    max-width: 1500px;
    margin: 0 auto;
  `}
`;

// Componentes

export const ContentFirstView = styled.div`
  ${() => css`
    margin: 150px 100px;
    padding: 20px;
  `}
`;
