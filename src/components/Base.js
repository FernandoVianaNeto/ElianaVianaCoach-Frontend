import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    min-height: 100vh;
  `}
`;

export const MenuContainer = styled.div`
  ${({ theme }) => css`
    padding: 20px 100px;

    @media ${theme.media.lteMedium} {
      padding: 0px;
      
    }
  `}
`;

export const Content = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
  `}
`;
