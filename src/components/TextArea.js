import styled, { css } from 'styled-components';

export const TextArea = styled.textarea`
  ${({ theme }) => css`
    font-family: ${theme.font.family.primaryFont};
    font-size: 16px;
    padding: 16px;
    background-color: ${theme.colors.primaryColor};
    width: 100%;
    border-radius: 4px;
    border: 1px solid ${theme.colors.secundaryColor};
    resize: none;
  `}
`;
