import React from 'react';
import Header from "../../Components/Header/Header";
import "./FilmsListPage.scss"
import FilmsList from "../../Components/FilmsList/FilmsList";

const FilmsListPage = () => {
    return (
        <div className="FilmsList">
            <Header showSearchForm={true} />
            <FilmsList />
        </div>
    );
};

export default FilmsListPage;