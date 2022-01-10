import styled, { css } from 'styled-components';

export const ButtonCall = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    font-family: ${theme.font.family.secundaryFont};
    font-size: 18px;
    font-weight: bold;
    color: ${theme.colors.primaryColor};
    background-color: ${theme.colors.fourthColor};
    padding: 15px 30px;

    cursor: pointer;

    border: 1px solid ${theme.colors.fourthColor};
    border-radius: 4px;

  `}
`;
