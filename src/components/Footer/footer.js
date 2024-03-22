import React from "react";
import "./footer.css";
import { useTranslation } from 'react-i18next';



const Footer = () => {
    const { t } = useTranslation();      
    return (
        <footer className="footer">
{t("Copyright Ryo Rafael, 2024")}
        </footer>
    )
}

export default Footer