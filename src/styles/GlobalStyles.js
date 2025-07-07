import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    /* Dynamically inject theme variables as CSS custom properties */
    ${(props) => {
      const theme = props.theme;
      let styles = "";
      for (const key in theme.colors) {
        styles += `--color-${key}: ${theme.colors[key]};`;
      }
      for (const key in theme.fontSizes) {
        styles += `--font-size-${key}: ${theme.fontSizes[key]};`;
      }
      for (const key in theme.lineHeights) {
        styles += `--line-height-${key}: ${theme.lineHeights[key]};`;
      }
      for (const key in theme.fonts) {
        styles += `--font-family-${key}: ${theme.fonts[key]};`;
      }
      for (const key in theme.breakpoints) {
        styles += `--break-points-${key}: ${theme.breakpoints[key]}`;
      }
      return styles;
    }}
  }

  /* Reset default styles */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    font-family: var(--font-family-primary);
    background-color: var(--color-background);
    color: var(--color-dark);
    line-height: var(--line-height-normal);
  }

  body {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-family-primary);
  }

  button {
    font-family: var(--font-family-primary);
    cursor: pointer;
  }
`;

export default GlobalStyles;
