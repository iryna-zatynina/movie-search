import React from 'react';
import {useTranslation} from "react-i18next";
import FilmCard from "../FilmCard/FilmCard";
import "./FilmsList.scss"

const FilmsList = () => {
    const {t} = useTranslation();

    return (
        <div className="FilmsList">
            <div className="container">
                <h2>{t("Popular among users")}</h2>
                <div className="list">
                    <FilmCard />
                    <FilmCard />
                    <FilmCard />
                    <FilmCard />
                    <FilmCard />
                    <FilmCard />
                    <FilmCard />
                    <FilmCard />
                </div>
            </div>
        </div>
    );
};

export default FilmsList;