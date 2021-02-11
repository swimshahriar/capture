import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Globalstyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";
import OurWork from "./pages/OurWork";

const App = () => {
  const location = useLocation();

  return (
    <>
      <Globalstyle />

      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default App;
