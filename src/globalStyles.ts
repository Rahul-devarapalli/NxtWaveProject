import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #0b69ff;
    --border-color: #d7dfe9;
    --background-color: #fbfbfb;
    --text-color: #7e858e99;
    --font-family: 'HK Grotesk', sans-serif;
  }

  body {
    font-family: var(--font-family);
    margin: 0;
    padding: 0;
    background-color: var(--background-color);
  }

  input::placeholder {
    font-style: italic;
    font-family: var(--font-family);
    font-size: 14px;
    font-weight: 400;
    color: var(--text-color);
  }
`;

export default GlobalStyle;
