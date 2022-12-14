import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    height: 100vh;
    width: 100vw;
  }
  #id {
    height: '100%';
    width: '100%';
  }
`;
 
export {GlobalStyle};