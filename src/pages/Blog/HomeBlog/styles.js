import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    height: 100vh;

    .img-background {
      position: absolute;
      z-index: -1;
      opacity: 0.3;
      width: 100%;
      max-height: 100%;
    }

    @media ${theme.media.lteMedium} {
      .img-background {
        display: none;
      }
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

export const TextsView = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    gap: 20px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 30px;
  `}
`;

// Componentes

export const ContentFirstView = styled.div`
  ${({ theme }) => css`
    margin: 150px 100px;
    padding: 20px;
    text-align: center;

    @media ${theme.media.lteMedium} {
      margin: 0px;
      padding: 0px;
      height: 80vh;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  `}
`;

export const TextsViewGrid = styled.div`
  ${({ theme }) => css`
    max-width: 1500px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 30px;

    h1 {
      font-family: ${theme.font.family.titleFont};
      font-size: 50px;
      color: ${theme.colors.fourthColor};
    }
  `}
`;

export const MoreTexts = styled.div`
  ${() => css`

  `}
`;

export const SearchBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: right;

    form {
      max-width: 600px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 40px;
        background-color: ${theme.colors.primaryColor};
        border: 1px solid ${theme.colors.secundaryColor};
        border-radius: 4px;
        color: ${theme.colors.fifthColor};
      }
    }

    @media ${theme.media.lteMedium} {
      form {
        width: 100%;
      }
    }
  `}
`;
