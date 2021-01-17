import React from "react";
import { FaLinkedin, FaFacebookSquare, FaArtstation } from "react-icons/fa";
import s from "./footer.module.css";

const Footer = () => (
  <div className={s.footercontainer}>
    <div className={s.contacttext}>
      <p> If you have an interesting project </p>
      <p> feel free to contact me :)</p>
    </div>
    <div className={s.socialcontainer}>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/madina-murzakhmetova-a72612182/"
      >
        <FaLinkedin />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com/madina.murzakhmetova.520"
      >
        <FaFacebookSquare />
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.artstation.com/madinarts"
      >
        <FaArtstation />
      </a>
    </div>
    <div className="credentials">
      <p>
        © 2019-2021 MadInArt Limited. All rights reserved. Built by Mykyta
        Kozhemiakin.
      </p>
    </div>
  </div>
);
export default Footer;
