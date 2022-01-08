import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    margin: 0px 16px;
    a {
      font-family: ${theme.font.family.primaryFont};
      color: ${theme.colors.primaryColor};
      text-decoration: none;
      font-size: 20px;
    }
  `}
`;
