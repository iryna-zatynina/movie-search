import React, {useEffect, useState} from 'react';
import Header from "../../Components/Header/Header";
import "./FilmsListPage.scss"
import FilmsList from "../../Components/FilmsList/FilmsList";
import BackButton from "../../Components/BackButton/BackButton";
import axios from "axios";
import Loader from "../../Components/Loader/Loader";
import {useTranslation} from "react-i18next";

const FilmsListPage = () => {
    useEffect(() => {
        setLoader(true);
        getFilms(filmValue);
        setLoader(false);
    }, [])

    const [filmValue, setFilmValue] = useState();
    const [loader, setLoader] = useState(false);
    const [filmsInfo, setFilmsInfo] = useState([]);
    const [validationMessage, setValidationMessage] = useState();
    const {t} = useTranslation()

    const getFilms = (filmName = "Batman") => {
        axios.get(`https://www.omdbapi.com/?s=${filmName}&apikey=9282a34`)
            .then((response) => {
                setFilmsInfo(response.data.Search);

            })
            .catch(() => {
                setValidationMessage("There are no such films")
            })
    }

    return (
        <div className="FilmsListPage">
            <Header showSearchForm={true} filmValue={filmValue} setFilmValue={setFilmValue} getFilms={getFilms} validationMessage={validationMessage} setValidationMessage={setValidationMessage}/>
            <BackButton linkBack={"/"}/>
            {filmsInfo ? <FilmsList filmsInfo={filmsInfo}/> : <p className="error-message">{t("Ooops... There are no such films.")}<br />{t("Try something else!")}</p>}
            {loader && <Loader />}
        </div>
    );
};

export default FilmsListPage;