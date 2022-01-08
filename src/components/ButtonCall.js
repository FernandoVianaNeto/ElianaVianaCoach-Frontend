import styled, { css } from 'styled-components';

export const ButtonCall = styled.button`
  ${({ theme }) => css`
    font-family: ${theme.font.family.primaryFont};
    font-size: 18px;
    color: ${theme.colors.primaryColor};
    background-color: ${theme.colors.fifthColor};
    padding: 15px 30px;

    cursor: pointer;

    border: 1px solid ${theme.colors.fifthColor};

  `}
`;
