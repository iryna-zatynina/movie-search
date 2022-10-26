import React from 'react';
import "./FilmInfo.scss";
import poster from "../../recourses/img/poster.png";
import {useTranslation} from "react-i18next";

const FilmInfo = () => {
    const {t} = useTranslation()
    return (
        <div className="FilmInfo">
            <div className="container">
                <div className="FilmInfo__img"><img src={poster} alt="film poster"/></div>
                <div className="FilmInfo__main">
                    <h2>Forrest Gump</h2>
                    <p><span>{t("Year")}:</span> 1994</p>
                    <p><span>{t("Country")}:</span> United States</p>
                    <p><span>{t("Genre")}:</span> Comedy, Drama</p>
                    <p><span>{t("Released")}:</span> Jul 6, 1994 </p>
                    <p><span>{t("Runtime")}:</span> 2h 22m</p>
                    <p><span>{t("Director")}:</span> Robert Zemeckis</p>
                    <p>The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.</p>
                </div>
                <div>
                    <p className="bold">{t("Actors")}:</p>
                    <ul className="actors">
                        <li>Tom Hanks</li>
                        <li>Robin Wright</li>
                        <li>Mykelti Williamson</li>
                        <li>Sally Field</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FilmInfo;