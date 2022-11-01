import React from 'react';
import {useTranslation} from "react-i18next";
import FilmCard from "../FilmCard/FilmCard";
import "./FilmsList.scss"
import {motion} from "framer-motion";

const FilmsList = ({filmsInfo}) => {

    const {t} = useTranslation();

    return (
        <div className="FilmsList">
            <div className="container">
                <h2>{t("Popular among users")}</h2>
                <div className="list">
                    {filmsInfo.map((film, index) => {
                        return (
                            <motion.div
                                initial={{y: 200}}
                                animate={{y: 0}}
                                transition={{delay: index / 10, duration: 0.5}}>
                                <FilmCard title={film.Title} year={film.Year} poster={film.Poster} rate={film.imdbID} key={index}/>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default FilmsList;