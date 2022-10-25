import React from 'react';
import Header from "../../Components/Header/Header";
import SearchForm from "../../Components/SearchForm/SearchForm";
import FilmInfo from "../../Components/FilmInfo/FilmInfo";
import "./OtherFilm.scss"

const OtherFilm = () => {
    return (
        <div className="OtherFilm">
            <Header SearchForm={SearchForm} />
            <FilmInfo />
        </div>
    );
};

export default OtherFilm;