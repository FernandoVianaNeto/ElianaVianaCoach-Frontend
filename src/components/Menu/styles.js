import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between ;
    padding: 4px 16px;
    background-color: ${theme.colors.fifthColor};
  `}  
`;

export const LogoContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 16px 32px;
    background-color: ${theme.colors.fifthColor};

    h3 {
      margin: 0;
      padding: 0;
      font-family: ${theme.font.family.logoFont};
      font-size: 36px;
      color: ${theme.colors.fourthColor};
    }
    
    small {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0;
      margin: 0;
      font-family: ${theme.font.family.primaryFont};
      color: ${theme.colors.primaryColor};
    }
  `}  
`;

export const ChildrenContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 16px 32px;
    background-color: ${theme.colors.fifthColor};
  `}  
`;
