import React from "react";

import Globalstyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";

const App = () => {
  return (
    <div>
      <Globalstyle />
      <Nav />
      <AboutUs />
    </div>
  );
};

export default App;
