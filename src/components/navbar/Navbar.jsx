import React from "react";
import { Link } from 'react-router-dom'
import s from "./navbar.module.css";

const Navbar = () => {
  return (
      <div className={s.headerContainer}>
        <h3 >MadInArt</h3>
        <div className={s.linksContainer}>
          <Link to="/">Home</Link>
          <Link to="/aboutme">About me</Link>
          <Link className={s.contactMe} to="/contactme">Contact me</Link>
        </div>
      </div>
  );
};

export default Navbar;
