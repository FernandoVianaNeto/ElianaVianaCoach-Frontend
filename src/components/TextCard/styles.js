import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.secundaryColor};
    max-width: 200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    text-align: left;
    padding: 30px;
    border-radius: 4px;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;

    h1 {
      font-family: ${theme.font.family.titleFont};
      color: ${theme.colors.fourthColor};
      font-size: 52px;
    }

    p {
      font-family: ${theme.font.family.primaryFont};
      color: ${theme.colors.fifthColor};
    }

    .button-container {
      margin-top: 20px;
      width: 100%;
      text-align: right;
    }
  `}
`;
