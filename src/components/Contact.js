import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
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
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc"></span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
          />
          <textarea
            className="msg"
            name="message"
            rows={5}
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>
          <div className="links">
            <a
              href="https://www.linkedin.com/in/ryo-rafael-bba453260/"
              rel="noreferrer"
              target="_blank"
            >
              <FaLinkedin className="link" />
            </a>
            <a
              href="https://github.com/ryorafael"
              rel="noreferrer"
              target="_blank"
            >
              <FaGithub className="link" />
            </a>
            <a
              href="https://www.instagram.com/ryorafael18/"
              rel="noreferrer"
              target="_blank"
            >
              <FaInstagram className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
