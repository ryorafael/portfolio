import React from "react";
import "./about.css";
import { useTranslation } from 'react-i18next';


const About = () => {
    const { t } = useTranslation();  
    return (
        <section id="about">
            <div className="aboutcontainer">
                <h2 className="aboutTitle">{t("About Me")}</h2>
                <p className="aboutmepara">{t("My journey into the professional world began early, at 14, when I got firsthand exposure to managing a restaurant through observing my parents. Those experiences taught me essential skills in interpersonal communication, organization, and management.")}</p>
                <p className="aboutmepara">{t("At 18, I set out on a solo adventure to France, driven by a passion for language and culture. In Aix-en-Provence, I pursued dual bachelor's degrees in language and arts, which expanded my horizons significantly.")}</p>
                <p className="aboutmepara">{t("Seeking new opportunities, I moved to Paris and found myself at the Bank of America, where I delved into corporate dynamics, honing various skills and building important connections.")}</p>
                <p className="aboutmepara">{t("However, my interest in technology led to a significant career shift towards becoming a full-stack engineer. Driven by passion, I immersed myself in comprehensive learning at an inclusive formation, Ada Tech School.")}</p>
                <p className="aboutmepara">{t("Currently, I'm eager to embark on a new chapter, seeking internship opportunities that will continue to fuel my growth, both professionally and personally.")}</p>
            </div>
        </section>
    );
}

export default About;
