import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    height: 100vh;

    .img-background {
      position: absolute;
      z-index: -1;
      opacity: 0.3;
      width: 100%;
      height: 100vh;
    }

    @media ${theme.media.lteMedium} {
      max-width: 100vw;

      .img-background {
        display: none;
      }
    }
  `}
`;

export const FirstView = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    min-height: 100vh;

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
      justify-content: center;
      gap: 30px;
      margin: 70px;

      font-family: ${theme.font.family.primaryFont};
    }

    @media ${theme.media.lteMedium} {
      margin: 0px;
      padding: 0px;
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

    @media ${theme.media.lteMedium} {
      display: flex;
      flex-direction: column;

      .left-column {
        padding: 10px 0px;
      }
    }
  `}
`;

// Componentes

export const ContentFirstView = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    height: 100%;

    p {
      text-align: justify;
    }

    @media ${theme.media.lteMedium} {
      margin: 0px;
      padding: 0px;

      .title {
        text-align: center;
        margin: 50px;
      }

      .description {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
      }
    }
  `}
`;

export const EspecialidadesGrid = styled.div`
  ${({ theme }) => css`
    max-width: 1500px;
    margin: 0 auto;

    @media ${theme.media.lteMedium} {
      display: flex;
      flex-direction: column;
      gap: 50px;
    }
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
