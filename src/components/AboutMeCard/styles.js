import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 50px;
    padding: 50px;


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
      }

      h1 {
        width: 100%;
        font-family: ${theme.font.family.titleFont};
        font-size: 35px;
        color: ${theme.colors.fourthColor};
      }
    }
  `}
`;
