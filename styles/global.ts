import { createGlobalStyle } from 'styled-components';
import { ResetCSS } from '.';

export const GlobalStyle = createGlobalStyle`
  ${ResetCSS}

  html {
    font-size: 62.5%;
  }

  html, body {
    font-family: 'Arial';
  }

  * {
    font-size: 1.6rem;
    font-weight: 400;
    font-family: Consolas, monaco, monospace;
    box-sizing: border-box;
  }
`;
