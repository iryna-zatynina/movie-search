import React from 'react';
import Header from "../../Components/Header/Header";
import FilmInfo from "../../Components/FilmInfo/FilmInfo";
import "./OtherFilm.scss"
import Backdrop from "bootstrap/js/src/util/backdrop";
import BackButton from "../../Components/BackButton/BackButton";

const OtherFilm = () => {
    return (
        <div className="OtherFilm">
            <Header showSearchForm={true} />
            <BackButton linkBack={"/search"}/>
            <FilmInfo />
        </div>
    );
};

export default OtherFilm;