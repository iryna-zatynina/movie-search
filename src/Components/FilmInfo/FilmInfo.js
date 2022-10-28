import React from 'react';
import "./FilmInfo.scss";
import {useTranslation} from "react-i18next";

const FilmInfo = ({filmInfo}) => {

    const {t} = useTranslation()

    return (
        <div className="FilmInfo">
            <div className="container">
                <div className="FilmInfo__img"><img src={filmInfo.Poster} alt="film poster"/></div>
                <div className="FilmInfo__main">
                    <h2>{filmInfo.Title}</h2>
                    <p><span>{t("Year")}:</span> {filmInfo.Year}</p>
                    <p><span>{t("Country")}:</span> {filmInfo.Country}</p>
                    <p><span>{t("Genre")}:</span> {filmInfo.Genre}</p>
                    <p><span>{t("Released")}:</span> {filmInfo.Released}</p>
                    <p><span>{t("Runtime")}:</span> {filmInfo.Runtime}</p>
                    <p><span>{t("Director")}:</span> {filmInfo.Director}</p>
                    <p>{filmInfo.Plot}</p>
                </div>
                <div>
                    <p className="bold">{t("Actors")}:</p>
                    <ul className="actors">
                        {filmInfo.Actors}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FilmInfo;