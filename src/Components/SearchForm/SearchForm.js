import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import "./SearchForm.scss"
import {logDOM} from "@testing-library/react";

const SearchForm = ({filmValue, setFilmValue, getFilms, validationMessage, setValidationMessage}) => {
    const {t} = useTranslation();

    const onButtonSearchClick = (e) => {
        e.preventDefault();
        const regex = /[a-zA-Z]+$/g;
        if (!regex.test(filmValue)) {
            setValidationMessage("Enter latin letters")
        } else if (filmValue.length < 3) {
            setValidationMessage("Too short name")
        }
            else {
            getFilms(filmValue);
            setFilmValue('');
        }
    }
    const onInputChange = (e) => {
        setFilmValue(e.target.value);
        setValidationMessage('');
    }

    return (
        <div>
            <form className="SearchForm">
                <input type="text" placeholder={t("Enter movie")} value={filmValue} onChange={onInputChange}/>
                <button onClick={onButtonSearchClick}>{t("Search")}</button>
            </form>
            <span className='validationMessage'>{t(validationMessage)}</span>
        </div>
    );
};

export default SearchForm;