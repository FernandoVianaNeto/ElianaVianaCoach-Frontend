import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 16px 32px;
    background-color: ${theme.colors.fifthColor};
    border-radius: 4px;
  `}  
`;
