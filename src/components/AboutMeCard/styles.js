import styled, { css } from 'styled-components';

const invertBackground = ({ theme }) => css`
  background-color: ${theme.colors.primaryColor};
`;

export const Container = styled.div`
  ${({ theme, invert }) => css`
    display: flex;
    align-items: center;
    gap: 50px;
    padding: 50px;
    max-width: 100vw;
    background-color: ${theme.colors.secundaryColor};
    ${invert && invertBackground}
    img {
      height: 33vh;
      border-radius: 4px;
    }

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      flex: 1;
      padding: 50px 0px;
      font-family: ${theme.font.family.primaryFont};

      p {
        text-align: justify;
        margin-top: 20px;
      }

      h1 {
        width: 100%;
        font-family: ${theme.font.family.titleFont};
        font-size: 35px;
        color: ${theme.colors.fourthColor};
      }
    }

    @media ${theme.media.lteMedium} {
      display: flex;
      flex-direction: column;
      padding: 0px;

      img {
        max-width: 300px;
      }
    }
  `}
`;
