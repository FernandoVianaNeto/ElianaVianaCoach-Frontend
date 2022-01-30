import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    height: 100vh;
    background-color: ${theme.colors.fifthColor};
    font-family: ${theme.font.family.primaryFont};

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 40px;

    .call-text {
      font-family: ${theme.font.family.titleFont};
      font-size: 70px;
      color: ${theme.colors.primaryColor};
    }

    h2 {
      color: ${theme.colors.fourthColor};
    }

    h3 {
      color: ${theme.colors.secundaryColor};
    }

    @media ${theme.media.lteMedium} {
      padding: 30px;
      text-align: center;
    }
  `}
`;

// Componentes

export const Header = styled.header`
  ${({ theme }) => css`
    padding: 30px;

    h1 {
      font-family: ${theme.font.family.logoFont};
      font-size: 50px;
      color: ${theme.colors.fourthColor};
    }
  `}
`;

export const ButtonContainer = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    gap: 40px;
  `}
`;

export const SocialMediaContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    p {
      color: ${theme.colors.primaryColor};
    }

    a {
      color: ${theme.colors.primaryColor};
      font-weight: bold;
      font-size: 24px;
    }

    div {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  `}
`;
