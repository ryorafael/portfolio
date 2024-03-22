import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_p4rwoqm", "template_ujmhtpf", form.current, {
        publicKey: "4EZqDjx_dUyh_jiK6",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Email Sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">{t("Contact Me")}</h1>
        <span className="contactDesc"></span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder={t("Your Name")}
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder={t("Your Email")}
            name="your_email"
          />
          <textarea
            className="msg"
            name="message"
            rows={5}
            placeholder={t("Your Message")}
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            {t("Submit")}
          </button>
          <div className="links">
            <div class="card">
              <a
                href="https://www.linkedin.com/in/ryo-rafael-bba453260/"
                rel="noreferrer"
                target="_blank"
                class="socialContainer containerThree"
              >
                <svg class="socialSvg linkdinSvg" viewBox="0 0 448 512">
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                </svg>
              </a>

              <a
                href="https://github.com/ryorafael"
                rel="noreferrer"
                target="_blank"
                class="socialContainer containerFour"
              >
                <svg class="socialSvg githubSvg" viewBox="0 0 24 24">
                  <path
                    fill="#000000"
                    d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.2 11.4.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.5-4-1.5-.5-1.2-1.3-1.5-1.3-1.5-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.9 1.3 3.7 1 .1-.8.4-1.3.8-1.6-2.8-.3-5.7-1.4-5.7-6.2 0-1.4.5-2.5 1.2-3.4-.1-.4-.5-1.6.1-3.3 0 0 1.1-.3 3.5 1.3 1-.3 2-.4 3-.4s2 .1 3 .4c2.4-1.6 3.5-1.3 3.5-1.3.6 1.7.2 2.9.1 3.3.7.9 1.2 2 1.2 3.4 0 4.8-2.9 5.9-5.7 6.2.4.4.8 1.2.8 2.4v3.5c0 .3.2.7.8.6C20.6 21.8 24 17.3 24 12c0-6.6-5.4-12-12-12z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
