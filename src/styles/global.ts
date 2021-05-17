import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: color 1s linear;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  html {
    font-size: 62.5%;
    transition: color 1s linear;
  }

  body {
    ${({ theme }) => css`
      background-color: ${theme.colors.background};
      transition: color 1s linear;
    `}

    .github-corner:hover .octo-arm{
      animation:octocat-wave 560ms ease-in-out;
      }
      @keyframes octocat-wave{
        0%,100%{transform:rotate(0);}
        20%,60%{transform:rotate(-25deg);}
        40%,80%{transform:rotate(10deg);}
      }
      @media (max-width:500px){
        .github-corner:hover .octo-arm{
          animation:none;
        }
        .github-corner .octo-arm{
          animation:octocat-wave 560ms ease-in-out;
          }
      }
  }

  button, body {
    font-family: 'Poppins';
  }
`

export default GlobalStyles
