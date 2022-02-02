import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .img-container {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 300px;
    }

    img {
      width: 400px;
      height: 270px;
      border-radius: 4px;
    }

    .description-p {
      height: 150px;
      display: flex;
      justify-content: flex-start;
      text-align: justify;
    }

    p {
      color: ${theme.colors.fifthColor};
      font-family: ${theme.font.family.primaryFont};
      text-align: center;
      max-width: 400px;
    }

    .description-title {
      font-weight: bold;
      font-size: 18px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @media ${theme.media.lteMedium} {
      img {
        max-width: 300px;
      }
    }
  `}
`;
