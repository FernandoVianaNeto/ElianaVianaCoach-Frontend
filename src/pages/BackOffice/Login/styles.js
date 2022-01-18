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

    h1 {
      font-family: ${theme.font.family.titleFont};
      font-size: 46px;
      color: ${theme.colors.primaryColor};
    }
  `}
`;