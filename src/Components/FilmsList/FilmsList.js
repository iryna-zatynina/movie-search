import React from 'react';
import {useTranslation} from "react-i18next";
import FilmCard from "../FilmCard/FilmCard";
import "./FilmsList.scss"

const FilmsList = ({filmsInfo}) => {

    const {t} = useTranslation();

    return (
        <div className="FilmsList">
            <div className="container">
                <h2>{t("Popular among users")}</h2>
                <div className="list">
                    {filmsInfo.map((film, index) => {
                        return <FilmCard title={film.Title} year={film.Year} poster={film.Poster} rate={film.imdbID} key={index}/>
                    })}
                </div>
            </div>
        </div>
    );
};

export default FilmsList;