import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 40px 30px;
    margin-left: 50px;
    font-family: ${theme.font.family.primaryFont};
    color: gray;

    .name {
      margin-top: 50px;
      text-align: center;
      font-family: ${theme.font.family.titleFont};
      font-size: 36px;
      color: ${theme.colors.fourthColor};
    }
  `}
`;
