import styled, { css } from 'styled-components';

export const ButtonLink = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.primaryColor};
    font-family: ${theme.font.family.primaryFont};
    font-size: 16px;
    padding: 8px 32px;
    cursor: pointer;
    border-radius: 4px;
    background-color: ${theme.colors.fourthColor};
    border: 1px solid ${theme.colors.fourthColor};
  `}
`;
