import styled, { css } from 'styled-components';

const invertBackground = ({ theme }) => css`
  background-color: ${theme.colors.primaryColor};
`;

export const Container = styled.div`
  ${({ theme, invert }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: justify;
    font-family: ${theme.font.family.primaryFont};
    ${invert && invertBackground};

    img {
      border-radius: 4px;
    }

    .column {
      margin: 50px;

      h1 {
        transform: rotate(-2deg);
        font-family: ${theme.font.family.titleFont};
        font-size: 44px;
        color: ${theme.colors.fourthColor};
      }

      h3 {
        color :${theme.colors.fifthColor};
      }

      p {
        margin: 15px 0px;
      }

      .button-container {
        margin-top: 50px;

        text-align: right;
      }
    }

    @media ${theme.media.lteMedium} {
      max-width: 100vw;
      display: flex;
      flex-direction: column;
      padding: 0px;
      margin: 0px;
      .column {
        margin: 20px;
      }

      img {
        max-width: 300px
      }
    }
  `}
`;
