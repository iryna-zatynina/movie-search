import React from 'react';
import Header from "../../Components/Header/Header";
import FilmInfo from "../../Components/FilmInfo/FilmInfo";
import "./OtherFilm.scss"

const OtherFilm = () => {
    return (
        <div className="OtherFilm">
            <Header showSearchForm={true} />
            <FilmInfo />
        </div>
    );
};

export default OtherFilm;