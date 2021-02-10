import { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #1b1b1b;
  font-family: 'Inter', sans-serif;
}

button {
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 3px solid #23d997;
  background: transparent;
  color: white;
  transition: all 0.5s ease;
  &:hover {
    background: #23d997;
    color: white;
  }
  
}

h2 {
    font-weight: lighter;
    font-size: 4rem;
  }
  h3 {
    color: white;
  }
  h4 {
    font-weight: bold;
    font-size: 2rem
  }
  a {
    font-size: 1.1rem;
  }
  span {
    font-weight: bold;
    color: #23d997;
  }
  p {
    color: #ccc;
    padding: 3rem 0;
    font-size: 1.4rem;
    line-height: 150%;
  }

`;

export default Globalstyle;
