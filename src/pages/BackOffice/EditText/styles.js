import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    max-width: 600px;
    margin: 0 auto;
    

    button {
      background-color: ${theme.colors.fourthColor};
      padding: 10px 40px;
      border: 1px solid ${theme.colors.primaryColor};
      border-radius: 4px;
      font-family: ${theme.font.family.primaryFont};
      font-size: 15px;
      color: ${theme.colors.primaryColor};
    }
  `}
`;
