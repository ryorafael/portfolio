import React from "react";
import "./works.css";
import portfolioimg from "../../assets/portfolio300.png";
import lefoufrog from "../../assets/frog300.png";
import catsocialmedia from "../../assets/socialmedia300.png";
import dataviz from "../../assets/dataviz300.png";
import onmeuble from "../../assets/onmeuble.png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="workstitle">My Portfolio</h2>
      <span className="worksDesc">
        I have done multiple group projects and personal projects that you can
        see below
      </span>
      <div className="card-row">
        <div class="carding">
          <div class="carding-inner">
            <div class="carding-front">
              <img src={portfolioimg} alt="" className="carding" />
            </div>
            <div class="carding-back">
              <p className="cardDesc">
                Developed my portfolio using react.js and other libraries that
                have been imported.
              </p>
            </div>
          </div>
        </div>
        <div class="carding">
          <div class="carding-inner">
            <div class="carding-front">
              <img src={lefoufrog} alt="" className="carding" />
            </div>
            <div class="carding-back">
              <p className="cardDesc">
                Developed a website for the restaurant Le Fou Frog, where I used
                HTML, CSS and Javascript. Eventually will configure an API for
                taking reservations and automatically sending them to the
                server.
              </p>
            </div>
          </div>
        </div>
        <div class="carding">
          <div class="carding-inner">
            <div class="carding-front">
              <img src={catsocialmedia} alt="" className="carding" />
            </div>
            <div class="carding-back">
              <p className="cardDesc">
                Reconfiguration of code that was given to us as a group of 2, we
                had to sort out the code and fix the server connections with
                mySQL and php.
              </p>
            </div>
          </div>
        </div>
        <div class="carding">
          <div class="carding-inner">
            <div class="carding-front">
              <img src={dataviz} alt="" className="carding" />
            </div>
            <div class="carding-back">
              <p className="cardDesc">
                In a group of 3 we deployed a website and integrated a weather
                and geolocation API. We used JSON and asynchronous methods.
              </p>
            </div>
          </div>
        </div>
        <div class="carding">
          <div class="carding-inner">
            <div class="carding-front">
              <img src={onmeuble} alt="" className="carding" />
            </div>
            <div class="carding-back">
              <p className="cardDesc"></p>
            </div>
          </div>
        </div>
      </div>
      <button className="worksbtn">See More</button>
    </section>
  );
};

export default Works;