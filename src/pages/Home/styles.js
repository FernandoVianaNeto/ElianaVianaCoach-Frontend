import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    padding: 0;
    margin: 0;

    z-index: 0;
    background-color: ${theme.colors.secundaryColor};
  `}
`;

export const MenuContainer = styled.div`
  ${() => css`
    padding: 20px 100px;

  `}
`;

// Styles das subpages

export const FirstView = styled.main`
  ${({ theme }) => css`
    min-height: 80vh;

    .column-left {
      display: flex; 
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
      height: 300px;
      margin: 30px 70px;
      padding: 50px;

      .call-text {
        max-width: 500px;
        margin: 50px;

        h1 {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          margin-top: 10px; 
          font-family: 'Mukta';
          /* font-family: ${theme.font.family.primaryFont}; */
          color: ${theme.colors.primaryColor};
          padding: 4px 8px;
        }
      }

      .button-container {
        margin: 0px 50px;
        display: flex;
        align-items: center;
      }
    }
  `}
`;

export const AboutMe = styled.div`
  ${({ theme }) => css`
    min-height: 100vh;
    font-size: 24px;

    .subpage-introduction {
      padding: 10px 30px;
      background-color: ${theme.colors.fifthColor};
    }

    .title {
      font-size: 60px;
      color: ${theme.colors.fourthColor};
      font-family: ${theme.font.family.titleFont};
      transform: rotate(-2deg);
    }

    small {
      font-family: ${theme.font.family.primaryFont};
      color: ${theme.colors.primaryColor};
    }

    h1 {
      color: ${theme.colors.fourthColor};
    }
  `}
`;

export const EspecialidadesMenu = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primaryColor};
    max-height: 100vh;
    padding: 40px 50px;

    .title {
      font-family: ${theme.font.family.titleFont};
      font-size: 60px;
      color: ${theme.colors.fourthColor};
      transform: rotate(-3deg);
    }

    .footer {
      display: flex;
      justify-content: center;
    }
  `}
`;

export const Testimonys = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1500px;
    margin: 0 auto;
    min-height: 60vh;

    .title {
      margin-top: 20px;
      font-family: ${theme.font.family.titleFont};
      font-size: 60px;
      color: ${theme.colors.fourthColor};
      transform: rotate(-3deg);
    }
  `}
`;

export const Schedule = styled.div`
  ${({ theme }) => css`
    height: 50vh;
    background-color: ${theme.colors.fifthColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h3 {
      color: ${theme.colors.complementarColor};
      font-family: ${theme.font.family.secondaryFont};
    }

    .title {
      color: ${theme.colors.fourthColor};
      font-family: ${theme.font.family.secondaryFont};
    }
  `}
`;

// Style dos elementos utilizados

export const ThreeGridTemplate = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0;
    margin: 40px 0px;
    padding: 40px 50px;

    .call-grid {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-around;
      max-width: 400px;
      
      h1 {
        text-align: center;
      }

      p {
        margin: 30px;
        text-align: center;
        font-family: ${theme.font.family.primaryFont};
        color: ${theme.colors.fifthColor};
      }

      .subtitle {
        text-align: center;
        font-family: ${theme.font.family.primaryFont};
      }
    }

    .image-grid {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      
      img {
        width: 400px;
        height: 300px;
        box-shadow: 0 0 2em ${theme.colors.primaryColor};
        border-radius: 4px;
      }
    }

    .description-grid {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background-color: ${theme.colors.primaryColor};
      height: 700px;
      max-width: 300px;
      padding: 30px;
      margin: 0;

      button {
        position: absolute;
        margin-top: 760px;
      }

      p {
        font-family: ${theme.font.family.primaryFont};
        color: ${theme.colors.fifthColor};
        text-align: justify;
      }

      h1 {
        font-family: ${theme.font.family.titleFont};
        margin: 30px 0px;
        width: 100%;
        text-align: left;
        transform: rotate(-3deg);
      }
    }
  `}
`;

export const EspecialidadesGrid = styled.div`
  ${() => css`
    max-width: 1500px;
    margin: 0 auto;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(3, 1fr);
    padding: 20px;
    height: 100%;
  `}
`;

export const TestimonyGrid = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;

    .img-container {
      height: 100%;
    }

    img {
      height: 100%;
      flex: 1;
      opacity: 0.7;
    }

    .left-column {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 40px 100px;

      .button-container {
        width: 100%;
        text-align: right;
        margin-right: 50px;

        button {
          cursor: pointer;
          background-color: transparent;
          border: none;
          font-family: ${theme.font.family.primaryFont};
          font-size: 18px;
          color: ${theme.colors.fifthColor};
        }
      }
    }
  `}
`;
