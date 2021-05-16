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

  body {
    ${({ theme }) => css`
      background-color: ${theme.colors.background};
      transition: color 1s linear;
    `}
  }

  button, body {
    font-family: 'Poppins';
  }
`

export default GlobalStyles
