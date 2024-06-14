import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeContainer from "../pages/home";

const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<HomeContainer />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;