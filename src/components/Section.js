import styled, { css } from 'styled-components';

export const Section = styled.div`
  ${() => css`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    
    h1 {
      padding: 0;
    }
  `}
`;
