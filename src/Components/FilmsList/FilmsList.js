import React from 'react';
import {useTranslation} from "react-i18next";
import FilmCard from "../FilmCard/FilmCard";
import nextId from "react-id-generator";
import "./FilmsList.scss"

const FilmsList = ({filmsInfo}) => {

    const {t} = useTranslation();

    return (
        <div className="FilmsList">
            <div className="container">
                <h2>{t("Popular among users")}</h2>
                <div className="list">
                    {filmsInfo.map((film) => {
                        return <FilmCard title={film.Title} year={film.Year} poster={film.Poster} rate={film.imdbID} key={nextId()}/>
                    })}
                </div>
            </div>
        </div>
    );
};

export default FilmsList;