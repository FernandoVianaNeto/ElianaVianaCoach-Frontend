import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    display: flex;
    min-height: 100vh;
  `}
`;

export const Aside = styled.aside`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    background-color: ${theme.colors.fifthColor};
    flex: 2;

    h1 {
      font-family: ${theme.font.family.titleFont};
      font-size: 40px;
      color: ${theme.colors.primaryColor};
    }
  `}
`;

export const Section = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.secundaryColor};
    flex: 10;
  `}
`;

// Componentes da página

export const Filter = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin: 30px;
    padding: 10px 30px;
    background-color: ${theme.colors.fourthColor};
    border-radius: 100px;

    button {
      font-family: ${theme.font.family.primaryFont};
      font-size: 16px;
      padding: 5px 10px;
      border-radius: 4px;
      border: 1px solid ${theme.colors.secundaryColor};
      cursor: pointer;
    }
  `}
`;

export const Texts = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 20px;

    padding: 30px;
    height: 100vh;

    h1 {
      font-family: ${theme.font.family.titleFont};
      font-size: 40px;
      color: ${theme.colors.fifthColor};
    }
  `}
`;

export const Depoimentos = styled.div`
  ${() => css`
    display: flex;
    height: 100vh;
  `}
`;

export const Pedidos = styled.div`
  ${() => css`
    display: flex;
  `}
`;
