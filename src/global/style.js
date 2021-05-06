import { createGlobalStyle } from "styled-components";

export const COLORS = {
  primary: "#121214",
  secondary: "#8257e6",
  third: "#04d361",
  default: "#e1e1e6",
};

export const GlobalStyle = createGlobalStyle`
  
  body{
    height : 100vh;
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background-color: ${COLORS.primary};
    
  }
  div{
    box-sizing: border-box;
  }
`;