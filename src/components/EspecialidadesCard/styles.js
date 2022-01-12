import styled, { css } from 'styled-components';

const invertBackground = ({ theme }) => css`
  background-color: ${theme.colors.primaryColor};
`;

export const Container = styled.div`
  ${({ theme, invert }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
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
        width: 100%;
        text-align: right;
      }
    }
  `}
`;
