import React, {useEffect} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home/Home";
import ContactMe from "./pages/ContactMe/ContactMe";
import AboutMe from "./pages/AboutMe/AboutMe";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/footer";
import {ToTopButton} from "./components/toTopButton/toTopButton.jsx";

const App = () => {
  useEffect(() => {
      document.title = window.location.pathname;
  });

  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}  />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/contactme" component={ContactMe} />
      </Switch>
      <Footer />
      <ToTopButton />
    </Router>
  );
};

export default App;
