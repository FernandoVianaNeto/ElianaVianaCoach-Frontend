import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100px;
    background-color: ${theme.colors.fifthColor};

    display: flex;
    align-items: center;
    justify-content: space-around;

    font-family: ${theme.font.family.primaryFont};
    border-radius: 4px;

    p {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      color: ${theme.colors.primaryColor};
    }

    span {
      font-weight: bold;
    }
  `}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${theme.colors.primaryColor};
  `}
`;
