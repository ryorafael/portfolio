import React from "react";
import "./navbar.css";
import { Link as ScrollLink } from "react-scroll";
import logo from "../../assets/logo.png";
import { MdOutlineContactPhone } from "react-icons/md";


const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" />
      <div className="desktopMenu">
        <ScrollLink to="home" smooth={true} duration={500} className="desktopMenuListItem">Home</ScrollLink>
        <ScrollLink to="about" smooth={true} duration={500} className="desktopMenuListItem">About</ScrollLink>
        <ScrollLink to="projects" smooth={true} duration={500} className="desktopMenuListItem">Projects</ScrollLink>
      </div>
      <button className="desktopMenuBtn">
        <MdOutlineContactPhone size={24} color="purple" />
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
