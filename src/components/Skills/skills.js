import React from "react";
import "./skills.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        I am skilled in multiple languages such as HTML, CSS, Javascript, PHP,
        React.js, and node.js
      </span>
      <div className="skillBar">
        <div className="skillBar">
          <FaHtml5 className="skillBarImg" />
          <div className="skillBarText">
            <h2>This is a filler text </h2>
            <p>This is a filler text </p>
          </div>
        </div>
        <div className="skillBar">
          <FaCss3Alt className="skillBarImg" />
          <div className="skillBarText">
            <h2>This is a filler text </h2>
            <p>This is a filler text </p>
          </div>
        </div>
        <div className="skillBar">
          <IoLogoJavascript className="skillBarImg" />
          <div className="skillBarText">
            <h2>This is a filler text </h2>
            <p>This is a filler text </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
