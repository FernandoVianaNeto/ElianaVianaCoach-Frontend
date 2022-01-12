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
  `}
`;
