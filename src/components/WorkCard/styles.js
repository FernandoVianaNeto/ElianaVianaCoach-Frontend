import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 400px;
      height: 270px;
      border-radius: 4px;
    }

    p {
      color: ${theme.colors.fifthColor};
      font-family: ${theme.font.family.primaryFont};
      text-align: center;
      max-width: 400px;
      margin: 30px 0px;
    }

    .description-title {
      font-weight: bold;
      font-size: 18px;
    }
  `}
`;
