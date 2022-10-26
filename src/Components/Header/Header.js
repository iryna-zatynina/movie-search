import React from 'react';
import {useTranslation} from "react-i18next";
import {NavDropdown} from "react-bootstrap";
import './Header.scss'
import SearchForm from "../SearchForm/SearchForm";

const Header = ({showSearchForm}) => {
    const {t, i18n} = useTranslation();
    return (
        <header className='Header'>
            <div className="container">
                <nav>
                    <div className='logo'>Movie <span>Search</span></div>
                    <div className="nav-block">
                        {showSearchForm ? <SearchForm /> : ""}
                        <NavDropdown
                            id="nav-dropdown-dark-example"
                            title={t("Language")}
                            menuVariant="dark"
                            className='dropdown'>
                            <NavDropdown.Item onClick={() => {i18n.changeLanguage("en")}}>{t("English")}</NavDropdown.Item>
                            <NavDropdown.Item onClick={() => {i18n.changeLanguage("ua")}}>{t("Ukrainian")}</NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;