import React from 'react';
import Header from "../../Components/Header/Header";
import './Landing.scss'
import Introduction from "../../Components/Introduction/Introduction";

const Landing = () => {
    return (
        <div className='Landing'>
            <Header showSearchForm={false}/>
            <Introduction />
        </div>
    );
};

export default Landing;