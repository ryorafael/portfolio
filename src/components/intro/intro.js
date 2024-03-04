import React from "react";
import "./intro.css";
import { Link as ScrollLink } from "react-scroll";
import { GrContact } from "react-icons/gr";

const Intro = () => {
  return (
    <section id="intro" className="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm<span className="introName"> Ryo Rafael</span>
          <br />
          Website Designer
        </span>
        <p className="introPara">
          I am a skilled web designer passionate about what I do
        </p>
        <ScrollLink to="intro" smooth={true} duration={500} className="btn">
          <button className="btn">
            <GrContact className="btnIcon" />
          </button>
        </ScrollLink>
      </div>
      <img src="" alt="" className="bg" />
    </section>
  );
};

export default Intro;
