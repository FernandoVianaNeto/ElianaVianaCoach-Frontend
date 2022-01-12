import styled, { css } from 'styled-components';

export const Input = styled.input`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColor};
    padding: 0px 16px;
    height: 45px;
    width: 300px;
    border-radius: 4px;
    border: 1px solid ${theme.colors.secundaryColor};
    font-family: ${theme.font.family.primaryFont};
    font-size: 16px;
  `}
`;
