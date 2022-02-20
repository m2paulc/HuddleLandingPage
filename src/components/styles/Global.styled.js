import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  --props-variant-primary-color: hsl(322 100% 66%); 
  --props-variant-light-blue: hsl(193 100% 96%); 

  *,
  *::before,
  *::after {
    margin: 0;
    box-sizing: border-box;
  }

  html,
  body {
    height: 100%;
  }

  body {
    background-color: ${({ theme }) => theme.colors.body};
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  
  img,
  picture,
  svg {
    display: block;
    max-width: 100%;
  }

  @media(max-width: ${({ theme }) => theme.mobile}) {
    body {
      font-size: 1.1rem;
      line-height: 1.1;
    }
    
  }
`;

export default GlobalStyles;