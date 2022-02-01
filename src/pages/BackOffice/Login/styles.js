import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  `}
`;

export const Form = styled.form`
  ${({ theme }) => css`
    max-width: 400px;
    margin: 0 auto;
    background-color: ${theme.colors.fifthColor};
    padding: 80px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    border-radius: 4px;

    small {
      font-family: ${theme.font.family.primaryFont};
      color: red;
    }

    h1 {
      font-family: ${theme.font.family.titleFont};
      font-size: 46px;
      color: ${theme.colors.primaryColor};
    }

    button {
      padding: 10px 20px;
      background-color: ${theme.colors.fourthColor};
      color: ${theme.colors.primaryColor};
      font-family: ${theme.font.family.primaryFont};
      font-size: 15px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  `}
`;
