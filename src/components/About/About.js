import React from "react";
import "./about.css";
import { useTranslation } from 'react-i18next';


const About = () => {
    const { t } = useTranslation();  
    return (
        <section id="about">
            <div className="aboutcontainer">
                <h2 className="aboutTitle">{t("About Me")}</h2>
                <p className="aboutmepara">testing to see how this stuff looks how is everyone doing today my back hurts like hell</p>
            </div>
        </section>
    );
}

export default About;
