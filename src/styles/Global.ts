import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
:root {
  --main-white: #f0f0f0;
  --main-red: #be3144;
  --main-blue: #45567d;
  --main-gray: #303841;
}
* {
  margin: 0;
  padding: 0;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
  scroll-behavior: smooth;
}

@media (max-width: 75em) {
  html {
    font-size: 60%;
  }
}

@media (max-width: 61.25em) {
  html {
    font-size: 58%;
  }
}

@media (max-width: 28.75em) {
  html {
    font-size: 55%;
  }
}

body {
  font-family: 'Poppins', sans-serif;
  font-size: 1.8rem; /* 18px */
  font-weight: 400;
  line-height: 1.4;
  color: var(--main-white);
}

h1,
h2 {
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  text-align: center;
}

h1 {
  font-size: 6rem;
}

h2 {
  font-size: 4.2rem;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: var(--main-white);
}

img {
  display: block;
  width: 100%;
}
`;