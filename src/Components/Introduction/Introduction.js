import React from 'react';
import {useTranslation} from "react-i18next";
import './Introduction.scss'
import {Link} from "react-router-dom";

const Introduction = () => {
    const {t} = useTranslation()
    return (
        <div className="Introduction">
            <div className="container">
                <div className="wrapper">
                    <h1>{t("Big movies fun?")}</h1>
                    <h2>{t("Huge collection of movies, TV shows, and more.")}</h2>
                    <h3>{t("Find your favourites and watch anytime.")}</h3>
                    <button><Link className='link' to={'/search'}>{t("Get started")}</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Introduction;