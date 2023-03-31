import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @config "./tailwind.config.ts";
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  /* poppins-300 - latin */
  @font-face {
      font-display: swap;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url('/fonts/poppins-v20-latin-300.woff2') format('woff2'),
    }
  /* poppins-regular - latin */
  @font-face {
    font-display: swap;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/poppins-v20-latin-regular.woff2') format('woff2'),
  }
  /* poppins-600 - latin */
  @font-face {
    font-display: swap;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url('/fonts/poppins-v20-latin-600.woff2') format('woff2'),
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }
  `}

  html {
    font-size: 62.5%
  }

`

export default GlobalStyle
