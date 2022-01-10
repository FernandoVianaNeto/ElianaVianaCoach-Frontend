import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 8px 16px;
    background-color: ${theme.colors.fifthColor};
    border-radius: 4px;
  `}  
`;

export const LogoContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-color: ${theme.colors.fifthColor};

    h2 {
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
    background-color: ${theme.colors.fifthColor};
  `}  
`;

export const ButtonsContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: flex-start;
    color: ${theme.colors.primaryColor};
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
  `}  
`;
