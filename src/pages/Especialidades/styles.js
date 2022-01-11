import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    img {
      position: absolute;
      z-index: -1;
      opacity: 0.3;
      width: 100%;
    }
  `}
`;

export const FirstView = styled.div`
  ${({ theme }) => css`
    height: 50vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1000px;
    margin-top: 70px;

    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 30px;

      h1 {
        font-family: ${theme.font.family.titleFont};
        font-size: 48px;
        color: ${theme.colors.fourthColor};
      }

      h3 {
        font-family: ${theme.font.family.secondaryFont};
        color: ${theme.colors.fourthColor};
      }
    } 

    .description {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
      margin: 70px;

      font-family: ${theme.font.family.primaryFont};

    }
  `}
`;
