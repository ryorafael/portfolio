import React from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import contacting from "../../assets/contact.png";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" />
      <div className="desktopMenu">
        <Link className="desktopMenuListItem">Home</Link>
        <Link className="desktopMenuListItem">Clients</Link>
        <Link className="desktopMenuListItem">About</Link>
        <Link className="desktopMenuListItem">Portfolio</Link>
      </div>
      <button className="desktopMenuBtn">
        <img src={contacting} alt="contact button" className="desktopMenuImg" />{" "}
        Contact Me
      </button>
    </nav>
  );
};

export default Navbar;
