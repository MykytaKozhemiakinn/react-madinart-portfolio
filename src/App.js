import React, { useEffect } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import ContactMe from "./pages/ContactMe/ContactMe";
import AboutMe from "./pages/AboutMe/AboutMe";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/footer";
import { ToTopButton } from "./components/toTopButton/toTopButton.jsx";
import AnimatedRouter from "react-animated-router";
import "react-animated-router/animate.css";

const App = () => {
  useEffect(() => {
    let title = window.location.pathname;
    document.title = title;
  });

  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRouter>
        <Route exact path="/" component={Home} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/contactme" component={ContactMe} />
      </AnimatedRouter>
      <Footer />
      <ToTopButton />
    </BrowserRouter>
  );
};

export default App;
