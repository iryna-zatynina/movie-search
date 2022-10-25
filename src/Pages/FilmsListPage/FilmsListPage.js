import React from 'react';
import Header from "../../Components/Header/Header";
import SearchForm from "../../Components/SearchForm/SearchForm";
import "./FilmsListPage.scss"
import FilmsList from "../../Components/FilmsList/FilmsList";

const FilmsListPage = () => {
    return (
        <div className="FilmsList">
            <Header SearchForm={SearchForm} />
            <FilmsList />
        </div>
    );
};

export default FilmsListPage;