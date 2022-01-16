import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    height: 100vh;

    .img-background {
      position: absolute;
      z-index: -1;
      opacity: 0.3;
      width: 100%;
      max-height: 100%;
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
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 20px;
    min-height: 100vh;
    margin: 0 auto;
  `}
`;

export const Questions = styled.div`
  ${({ theme }) => css`
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    max-width: 1500px;
    margin: 0 auto;

    .left-column {
      margin: 50px;
      padding: 30px 70px;
      max-width: 300px;
      text-align: center;
      background-color: ${theme.colors.primaryColor};
      border-radius: 4px;

      h1 {
        font-family: ${theme.font.family.titleFont};
        font-size: 50px;
        color: ${theme.colors.fourthColor};
      }
    }

    .right-column {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 20px;
      flex: 1;
    }
  `}
`;

// Componentes

export const ContentFirstView = styled.div`
  ${() => css`
    margin: 150px 100px;
    padding: 20px;
    text-align: center;
  `}
`;

export const EspecialidadesGrid = styled.div`
  ${() => css`
    max-width: 1500px;
    margin: 0 auto;
  `}
`;

export const QuestionGrid = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1500px;
    margin: 0 auto;
  `}
`;
