import React, {useEffect, useState} from 'react';
import Header from "../../Components/Header/Header";
import FilmInfo from "../../Components/FilmInfo/FilmInfo";
import "./OtherFilm.scss";
import BackButton from "../../Components/BackButton/BackButton";
import {useParams} from "react-router";
import Loader from "../../Components/Loader/Loader";
import axios from "axios";

const OtherFilm = () => {

    const rate = useParams().rate;

    const [loader, setLoader] = useState(false);
    const [filmData, setFilmData] = useState({});

    useEffect(() => {
        setLoader(true);
        axios.get(`https://www.omdbapi.com/?apikey=9282a34&plot=full&i=${rate}`)
            .then((response) => {
                setLoader(false)
                setFilmData(response.data);
            })
    }, [rate])

    return (
        <div className="OtherFilm">
            <Header showSearchForm={false} />
            <BackButton linkBack={"/search"}/>
            <FilmInfo filmData={filmData}/>
            {loader && <Loader/>}
        </div>
    );
};

export default OtherFilm;