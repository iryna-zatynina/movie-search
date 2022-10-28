import React, {useEffect, useState} from 'react';
import Header from "../../Components/Header/Header";
import "./FilmsListPage.scss"
import FilmsList from "../../Components/FilmsList/FilmsList";
import BackButton from "../../Components/BackButton/BackButton";
import axios from "axios";
import Loader from "../../Components/Loader/Loader";
import {useTranslation} from "react-i18next";
import AppContext from "../../Context/AppContext";

const FilmsListPage = () => {
    useEffect(() => {
        getFilms();
    }, [])

    const [filmValue, setFilmValue] = useState('');
    const [loader, setLoader] = useState(false);
    const [filmsInfo, setFilmsInfo] = useState([]);
    const [validationMessage, setValidationMessage] = useState('');
    const {t} = useTranslation()

    const getFilms = (filmName = "Batman") => {
        setLoader(true);
        axios.get(`https://www.omdbapi.com/?s=${filmName}&apikey=9282a34`)
            .then((response) => {
                setLoader(false);
                setFilmsInfo(response.data.Search);
            })
            .catch(() => {
                setValidationMessage("There are no such films")
            })
    }

    console.log(filmsInfo)
    return (
        <AppContext.Provider value={{filmValue, setFilmValue, getFilms, validationMessage, setValidationMessage}}>
            <div className="FilmsListPage">
                <Header showSearchForm={true} />
                <BackButton linkBack={"/"}/>
                {filmsInfo.length > 0 ? <FilmsList filmsInfo={filmsInfo}/> : <p className="error-message">{t("Ooops... There are no such films.")}<br />{t("Try something else!")}</p>}
                {loader && <Loader />}
            </div>
        </AppContext.Provider>
    );
};

export default FilmsListPage;