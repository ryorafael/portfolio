import React from "react";
import "./works.css";
import portfolioimg from "../../assets/portfolio300.png";
import lefoufrog from "../../assets/frog300.png";
import catsocialmedia from "../../assets/socialmedia300.png";
import dataviz from "../../assets/dataviz300.png";
import onmeuble from "../../assets/onmeuble.png";
import { useTranslation } from "react-i18next";

const Works = () => {
  const { t } = useTranslation();
  return (
    <section id="works">
      <h2 className="workstitle">{t("My Portfolio")}</h2>
      <span className="worksDesc">
        {t("I have done multiple group projects and personal projects that you can see below")}
      </span>
      <div className="card-row">
        <div class="carding">
          <a
            href="https://github.com/ryorafael/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <p className="cardTitle">{t("Portfolio")}</p>
          </a>
          <div class="carding-inner">
            <div class="carding-front">
              <img src={portfolioimg} alt="porfolio" className="carding" />
            </div>
            <div class="carding-back">
              <p className="cardDesc">
                {t("Developed my portfolio using react.js and other libraries that have been imported.")}
              </p>
            </div>
          </div>
        </div>
        <div class="carding">
          <a
            href="https://github.com/ryorafael/personal-project-lff"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <p className="cardTitle">Le Fou Frog</p>
          </a>
          <div class="carding-inner">
            <div class="carding-front">
              <img
                src={lefoufrog}
                alt="website for the restaurant le fou frog"
                className="carding"
              />
            </div>
            <div class="carding-back">
              <p className="cardDesc">
{t("Developed a website for the restaurant Le Fou Frog, where I used HTML, CSS and Javascript. Eventually will configure an API for taking reservations and automatically sending them to the server.")}              </p>
            </div>
          </div>
        </div>
        <div class="carding">
          <a
            href="https://github.com/adatechschool/reseau-social-php-ryo-walid-nicolas"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <p className="cardTitle">{t("Social Media Project")}</p>
          </a>
          <div class="carding-inner">
            <div class="carding-front">
              <img
                src={catsocialmedia}
                alt="social media project"
                className="carding"
              />
            </div>
            <div class="carding-back">
              <p className="cardDesc">
                {t("Reconfiguration of code that was given to us as a group of 2, we had to sort out the code and fix the server connections with mySQL and php.")}
              </p>
            </div>
          </div>
        </div>
        <div class="carding">
          <a
            href="https://github.com/adatechschool/projet-collectif-dataviz-ryo-taous-nadege"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <p className="cardTitle">{t("Data Visualization Project")}</p>
          </a>
          <div class="carding-inner">
            <div class="carding-front">
              <img src={dataviz} alt="" className="carding" />
            </div>
            <div class="carding-back">
              <p className="cardDesc">
                {t("In a group of 3 we deployed a website and integrated a weather and geolocation API. We used JSON and asynchronous methods.")}
              </p>
            </div>
          </div>
        </div>
        <div class="carding">
          <a
            href="https://github.com/adatechschool/onmeuble"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            <p className="cardTitle">On Meuble</p>
          </a>
          <div class="carding-inner">
            <div class="carding-front">
              <img src={onmeuble} alt="" className="carding" />
            </div>
            <div class="carding-back">
              <p className="cardDesc">
                {t("A group project of 8 we worked on both back end and front end. Back end we used express.js and supabase and front we used react.")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <a href="https://github.com/ryorafael" target="_blank" rel="noopener noreferrer" class="worksbtn">{t("See More on Github")}</a>
    </section>
  );
};

export default Works;
