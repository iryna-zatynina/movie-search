import React from 'react';
import Header from "../../Components/Header/Header";
import "./FilmsListPage.scss"
import FilmsList from "../../Components/FilmsList/FilmsList";
import BackButton from "../../Components/BackButton/BackButton";

const FilmsListPage = () => {
    return (
        <div className="FilmsList">
            <Header showSearchForm={true} />
            <BackButton linkBack={"/"}/>
            <FilmsList />
        </div>
    );
};

export default FilmsListPage;