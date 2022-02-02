import styled, { css } from 'styled-components';

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 100%;

    button {
      padding: 0px 16px;

      &[submit] {
        color: ${theme.colors.primaryColor};
      }
    }

    h1 {
      font-family: ${theme.font.family.titleFont};
      color: ${theme.colors.fourthColor};
    }

    div {
      width: 100%;

      small {
        font-family: ${theme.font.family.primaryFont};
        color: ${theme.colors.fourthColor};
      }
    }
  `}
`;
