import React from 'react';
import {useTranslation} from "react-i18next";
import './Introduction.scss'
import {Link} from "react-router-dom";
import {motion} from "framer-motion";

const Introduction = () => {
    const {t} = useTranslation()

    return (
        <div className="Introduction">
            <div className="container">
                <div className="wrapper">
                    <motion.h1
                        initial={{y: 1000}}
                        animate={{y: 0,}}
                        transition={{duration: 1}}>{t("Big movies fun?")}</motion.h1>
                    <motion.h2
                        initial={{y: 1000}}
                        animate={{y: 0,}}
                        transition={{duration: 1.5}}>{t("Huge collection of movies, TV shows, and more.")}</motion.h2>
                    <motion.h3
                        initial={{y: 1000}}
                        animate={{y: 0,}}
                        transition={{duration: 2}}>{t("Find your favourites and watch anytime.")}</motion.h3>
                    <Link className='link' to={'/search'}>
                        <motion.button
                            initial={{scale: 0}}
                            animate={{scale: 1}}
                            transition={{duration: 1, delay: 2}}>{t("Get started")}
                        </motion.button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Introduction;