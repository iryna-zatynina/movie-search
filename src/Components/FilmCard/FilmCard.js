import React from 'react';
import "./FilmCard.scss"
import poster from "../../recourses/img/poster.png"
import {Link} from "react-router-dom";

const FilmCard = () => {
    return (
        <div className="FilmCard">
            <Link className='link' to={'/id'}>
                <img src={poster} alt="film poster"/>
                <h4>Forrest Gump</h4>
                <h5>1994</h5>
            </Link>
        </div>
    );
};

export default FilmCard;