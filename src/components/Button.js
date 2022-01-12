import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.primaryColor};
    background-color: ${theme.colors.fourthColor};
    min-height: 40px;
    min-width: 200px;
    font-family: ${theme.font.family.primaryFont};
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid ${theme.colors.primaryColor};
    cursor: pointer;
  `}
`;
