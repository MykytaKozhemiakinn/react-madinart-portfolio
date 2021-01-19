import React from "react";
import DocumentTitle from "react-document-title";

import s from "./aboutMe.module.css";

import Avatar from "../../assets/AboutMePhoto.webp";
import AIhexagon from "../../assets/hexagons/AIhexagon.webp";
import Hexagon from "../../assets/hexagons/hexagon.webp";
import MAYAhexagon from "../../assets/hexagons/MAYAhexagon.webp";
import Substhexagon from "../../assets/hexagons/Substhexagon.webp";
import Zbrhexagon from "../../assets/hexagons/Zbrhexagon.webp";

const AboutMe = () => {
  const path = document.location.pathname;
  console.log(path)
  return (
    <DocumentTitle title="MadInArt | About">
      <div className={s.parent}>
        <div className={s.helloText}>
          <span>
            Hello, I’m a <span className={s.grey}>digital artist</span>, with
          </span>
          over 3 years of experience.
        </div>
        <div className={s.skillsAvatarContainer}>
          <div className={s.skills}>
            <p className={s.helloMessage}>
              Hello, my name is Madina and I'm digital artist . Also I'm a
              student of 3D Graphics and Game Art field, which is in looove with
              drawing and modeling.
            </p>
            <p className={s.my_skills}>
              <strong>My skills are:</strong>
            </p>
            <ul className="list">
              <li>‣ Concepting, drawing 2D characters;</li>
              <li>
                ‣ Creating illustrations for books, posters, t-shirts & etc.;
              </li>
              <li>‣ Drawing digital portraits;</li>
              <li>‣ Drawing vector illustrations.</li>
              <li>‣ Modeling & texturing 3D characters.</li>{" "}
            </ul>
            <div className={s.stats}>
              <div className={s.stat}>
                120<span>projects</span>
              </div>
              <div className={s.stat}>
                15<span>collabs</span>
              </div>
            </div>
          </div>
          <div className={s.avatar}>
            <img src={Avatar} alt="avatar" />
          </div>
        </div>

        <div className={s.toolsContainer}>
          <p>Tools I use:</p>
          <hr />
          <div className={s.tools}>
            <img src={AIhexagon} alt="AIhexagon" />
            <img src={Hexagon} alt="Hexagon" />
            <img src={MAYAhexagon} alt="MAYAhexagon" />
            <img src={Substhexagon} alt="Substhexagon" />
            <img src={Zbrhexagon} alt="Zbrhexagon" />
          </div>
        </div>
      </div>
    </DocumentTitle>
  );
};

export default AboutMe;
