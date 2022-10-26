import React from 'react';
import {useTranslation} from "react-i18next";
import "./SearchForm.scss"

const SearchForm = () => {
    const {t} = useTranslation();
    return (
        <form className="SearchForm">
            <input type="text" placeholder={t("Enter movie")}/>
            <button>{t("Search")}</button>
        </form>
    );
};

export default SearchForm;