import React from 'react';
import "./FilmCard.scss"
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
const FilmCard = ({title, year, poster, rate}) => {
    return (
        <motion.div
            className="FilmCard"
            whileHover={{scale: 1.1}}>
            <Link className='link' to={`/imdbID${rate}`}>
                <img src={poster} alt="film poster"/>
                <h4>{title}</h4>
                <h5>{year}</h5>
            </Link>
        </motion.div>
    );
};

export default FilmCard;