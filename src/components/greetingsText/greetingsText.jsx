import React from "react";
import s from "./greetingsText.module.css";

export const GreetingsText = () => (
  <div className={s.helloText}>
    <p className={s.greetings}>
      Hello, I’m a <span>digital artist</span>, with over 3 years of experience.
    </p>
  </div>
);
