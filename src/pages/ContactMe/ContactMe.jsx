import React, { useState, memo } from "react";
import Swal from "sweetalert2";
import DocumentTitle from "react-document-title";
import { db } from "../../firebase/firebase.utils";

import s from "./contactMe.module.css";

const ContactMe = memo(() => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    if (email.length > 4 && message.length > 5) {
      db.collection("contactPageMadinart")
        .add({
          name: name,
          email: email,
          message: message,
        })
        .then(() => {
          setLoader(false);
          Swal.fire({
            text: "Your message has been sent",
            icon: "success",
            confirmButtonColor: "black",
          });
        })
        .catch((error) => {
          alert(error.message);
          setLoader(false);
        });
    } else {
      Swal.fire({
        text: "Provide at least email and your message",
        icon: "error",
        confirmButtonColor: "black",
      });
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <DocumentTitle title="MadInArt | Contact">
      <div className={s.mainContainer}>
        <div className={s.emailFields}>
          <div className={s.textContainer}>
            <h1 className={s.headerContainer}>Drop me the message.</h1>
            <span>
              <p>
                To begin the cooperation, just provide the detailed description
                of your idea.
              </p>
              <p>
                Please email to m8mur@mail.ru, or just speak your mind below.
              </p>
              <p>I usually respond within 4 hours.</p>
            </span>
          </div>
          <form onSubmit={handleSubmit} className={s.formContainer}>
            <input
              className={s.formInput}
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className={s.formInput}
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              className={s.textAreaContainer}
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div className={s.buttonContainer}>
              <button type="submit">Send it</button>
            </div>
          </form>
        </div>
      </div>
    </DocumentTitle>
  );
});
export default ContactMe;
