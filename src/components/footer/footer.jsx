import React from "react";
import { FaLinkedin, FaFacebookSquare, FaArtstation } from "react-icons/fa";
import { Link, useRouteMatch } from "react-router-dom";
import { ContactButton } from "./../contactButton/contactButton";
import s from "./footer.module.css";

const Footer = () => {
  const home = useRouteMatch({
    path: "/",
    strict: true,
    exact: true,
    sensitive: true,
  });
  const aboutme = useRouteMatch({
    path: "/aboutme",
    strict: true,
    exact: true,
    sensitive: true,
  });

  return (
    <div className={s.footercontainer}>
      {home || aboutme ? (
        <div className={s.contacttext}>
          <p> If you have an interesting project </p>
          <p> feel free to contact me :)</p>
        </div>
      ) : null}

      <div className={s.buttonContainer}>
        {home || aboutme ? (
          <Link to="/contactme">
            <ContactButton />
          </Link>
        ) : null}
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
};
export default Footer;
