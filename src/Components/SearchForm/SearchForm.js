import React, {useContext} from 'react';
import {useTranslation} from "react-i18next";
import "./SearchForm.scss";
import AppContext from "../../Context/AppContext";

const SearchForm = () => {
    const {t} = useTranslation();
    const {filmValue, setFilmValue, getFilms, validationMessage, setValidationMessage} = useContext(AppContext);

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