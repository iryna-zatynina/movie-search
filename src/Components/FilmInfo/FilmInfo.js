import React from 'react';
import "./FilmInfo.scss";
import {useTranslation} from "react-i18next";

const FilmInfo = ({filmData}) => {

    const {t} = useTranslation()

    return (
        <div className="FilmInfo">
            <div className="container">
                <div className="FilmInfo__img"><img src={filmData.Poster} alt="film poster"/></div>
                <div className="FilmInfo__main">
                    <h2>{filmData.Title}</h2>
                    <p><span>{t("Year")}:</span> {filmData.Year}</p>
                    <p><span>{t("Country")}:</span> {filmData.Country}</p>
                    <p><span>{t("Genre")}:</span> {filmData.Genre}</p>
                    <p><span>{t("Released")}:</span> {filmData.Released}</p>
                    <p><span>{t("Runtime")}:</span> {filmData.Runtime}</p>
                    <p><span>{t("Director")}:</span> {filmData.Director}</p>
                    <p>{filmData.Plot}</p>
                </div>
                <div>
                    <p className="bold">{t("Actors")}:</p>
                    <ul className="actors">
                        {filmData.Actors}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FilmInfo;