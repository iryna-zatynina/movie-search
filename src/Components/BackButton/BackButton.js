import React from 'react';
import "./BackButton.scss"
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const BackButton = ({linkBack}) => {
    const {t} = useTranslation();
    return (
        <div className="container">
            <Link className='link' to={linkBack}><button className="BackButton">{t("Back")}</button></Link>
        </div>
    );
};

export default BackButton;