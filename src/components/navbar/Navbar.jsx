import React from "react";
import { Link } from "react-router-dom";
import { ContactButton } from "./../contactButton/contactButton";
import s from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={s.headerContainer}>
      <h3>MadInArt</h3>
      <div className={s.linksContainer}>
        <Link to="/">Home</Link>
        <Link to="/aboutme">About me</Link>
        <Link to="/contactme">
          <ContactButton />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
