import React, { useState } from "react";
import "./navbar.css";
import { Link as ScrollLink } from "react-scroll";
import logo from "../../assets/logo.png";
import { MdOutlineContactPhone } from "react-icons/md";
import { HiBars3 } from "react-icons/hi2";



const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" />
      <div className="desktopMenu">
        <ScrollLink activeClass="active" to="intro" offset={-50} spy={true} smooth={true} duration={500} className="desktopMenuListItem">Home</ScrollLink>
        <ScrollLink activeClass="active" to="skills" offset={-50} spy={true}  smooth={true} duration={500} className="desktopMenuListItem">About</ScrollLink>
        <ScrollLink activeClass="active" to="works" offset={-50} spy={true} smooth={true} duration={500} className="desktopMenuListItem">Projects</ScrollLink>
      </div>
      <button className="desktopMenuBtn" onClick={() => {
      document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
      }} >
        <MdOutlineContactPhone size={24} color="purple" />
        Contact Me
      </button>

      <HiBars3 alt="mobMenu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)} />
      <div className="navMenu" style={{display: showMenu? 'flex': 'none'}}>
        <ScrollLink activeClass="active" to="intro" offset={-50} spy={true} smooth={true} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Home</ScrollLink>
        <ScrollLink activeClass="active" to="skills" offset={-50} spy={true}  smooth={true} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>About</ScrollLink>
        <ScrollLink activeClass="active" to="works" offset={-50} spy={true} smooth={true} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Projects</ScrollLink>
        <ScrollLink activeClass="active" to="contact" offset={-50} spy={true} smooth={true} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Contact</ScrollLink>
      </div>
    </nav>
  );
};

export default Navbar;
