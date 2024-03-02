import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

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
          <input type="text" className="name" placeholder="Your Name" name='your_name' />
          <input type="email" className="email" placeholder="Your Email" name="your_email" />
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
            <img src="{}" alt="" className="link" />
            <img src="{}" alt="" className="link" />
            <img src="{}" alt="" className="link" />
            <img src="{}" alt="" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
