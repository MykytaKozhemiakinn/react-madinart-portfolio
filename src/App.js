import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import ContactMe from "./pages/ContactMe/ContactMe";
import AboutMe from "./pages/AboutMe/AboutMe";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/footer";
import { ToTopButton } from "./components/toTopButton/toTopButton.jsx";

const App = () => {
  useEffect(() => {
    let title = window.location.pathname;
    document.title = title;
  });

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/contactme" component={ContactMe} />
      </Switch>
      <Footer />
      <ToTopButton />
    </BrowserRouter>
  );
};

export default App;
