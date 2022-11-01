import React from "react";
import {Route, Routes} from "react-router";
import Landing from "../Pages/Landind/Landing";
import FilmsListPage from "../Pages/FilmsListPage/FilmsListPage";
import OtherFilm from "../Pages/OtherFilm/OtherFilm";


const useRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/search" element={<FilmsListPage />} />
            <Route path="/imdbID:rate" element={<OtherFilm />} />
        </Routes>
    )
}
export default useRoutes;