import React from 'react';
import "./FilmCard.scss"
// import poster from "../../recourses/img/poster.png"
import {Link} from "react-router-dom";
const FilmCard = ({title, year, poster, rate}) => {
    return (
        <div className="FilmCard">
            <Link className='link' to={`/imdbID${rate}`}>
                <img src={poster} alt="film poster"/>
                <h4>{title}</h4>
                <h5>{year}</h5>
            </Link>
        </div>
    );
};

export default FilmCard;