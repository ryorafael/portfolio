import React from "react";
import "./intro.css";
// import bg from "../../assets";
//import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
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
        <link>
          <button className="btn">
            <img src="" alt=""></img>
          </button>
        </link>
      </div>
      <img src="" alt="" className="bg" />
    </section>
  );
};

export default Intro;
