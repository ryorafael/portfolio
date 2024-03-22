import React, { useState } from "react";
import "./navbar.css";
import { Link as ScrollLink } from "react-scroll";
import logo from "../../assets/logo3.png";
import { HiBars3 } from "react-icons/hi2";
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import { useEffect } from "react";


const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [showMenu, setShowMenu] = useState(false)

  const changeLanguage = (language) => {
    i18n.changeLanguage(language); // Change the language using i18n object
  };

  const goToHome = () => {
    window.location.href = "/";
  };

  useEffect(() => {
    const scrollLinks = document.querySelectorAll('.desktopMenuListItem');
    scrollLinks.forEach(link => {
        link.innerHTML = link.textContent.split(' ').map(word => `<span>${word}</span>`).join(' ');
    });
}, []);

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" onClick={goToHome}/>
      <div className="desktopMenu">
        <ScrollLink activeClass="active" to="intro" offset={-50} spy={true} smooth={true} duration={500} className="desktopMenuListItem">{t('Home')}</ScrollLink>
        <ScrollLink activeClass="active" to="about" offset={-50} spy={true}  smooth={true} duration={500} className="desktopMenuListItem">{t('About')}</ScrollLink>
        <ScrollLink activeClass="active" to="skills" offset={-50} spy={true}  smooth={true} duration={500} className="desktopMenuListItem">{t('Skills')}</ScrollLink>
        <ScrollLink activeClass="active" to="works" offset={-50} spy={true} smooth={true} duration={500} className="desktopMenuListItem">{t('Projects')}</ScrollLink>
      </div>
      <div className="buttonGroup">
        <button className="langBtn" onClick={() => changeLanguage('en')}>EN</button>
        <button className="langBtn" onClick={() => changeLanguage('fr')}>FR</button>
        <button className="desktopMenuBtn" onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
          {t('Contact Me')}
        </button>
      </div>

      <HiBars3 alt="mobMenu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)} />
      <div className="navMenu" style={{display: showMenu? 'flex': 'none'}}>
        <ScrollLink activeClass="active" to="intro" offset={-50} spy={true} smooth={true} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>{t('Home')}</ScrollLink>
        <ScrollLink activeClass="active" to="about" offset={-50} spy={true}  smooth={true} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>{t('About')}</ScrollLink>
        <ScrollLink activeClass="active" to="skills" offset={-50} spy={true} smooth={true} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>{t('Skills')}</ScrollLink>
        <ScrollLink activeClass="active" to="works" offset={-50} spy={true} smooth={true} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>{t('Projects')}</ScrollLink>
        <ScrollLink activeClass="active" to="contact" offset={-50} spy={true} smooth={true} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>{t('Contact')}</ScrollLink>
        <div>
          <button onClick={() => changeLanguage('en')}>EN</button>
          <button onClick={() => changeLanguage('fr')}>FR</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
