import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #fff;
    font-family: 'Roboto', sans-serif;
  }
`

export default GlobalStyle