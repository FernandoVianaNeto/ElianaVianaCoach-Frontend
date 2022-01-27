import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 8px 16px;
    background-color: ${theme.colors.fifthColor};
    border-radius: 4px;

    max-width: 1500px;
    margin: 0 auto;

    .show-option {
      visibility: hidden;
      position: absolute;
    }

    @media ${theme.media.lteMedium} {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 30px;
      background-color: ${theme.colors.fifthColor};
      height: 100vh;
      position: fixed;
      padding: 0px;
      margin: 0px;
      z-index: 200;

      .show-option {
        background-color: transparent;
        color: ${theme.colors.fourthColor};
        visibility: visible;
        position: fixed;
        left: 10px;
        top: 10px;
        border: none;
        font-size: 30px;
      }
    }
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

    @media ${theme.media.lteMedium} {
      h2 {
        font-size: 50px;
      }
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
    transition: ease-in-out all 300ms;

    .social-media-container {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      gap: 10px;

      a {
        color: ${theme.colors.primaryColor};
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }

    @media ${theme.media.lteMedium} {
      width: 100vw;
      display: flex;
      flex-direction: column;
    }
  `}  
`;
