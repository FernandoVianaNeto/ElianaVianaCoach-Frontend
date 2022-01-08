import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    p {
      font-family: ${theme.font.family.primaryFont}
    }
  `}
`;
