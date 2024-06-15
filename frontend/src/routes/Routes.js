import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeContainer from "../pages/home";
import Bets from "../pages/bets";
import MainConfigs from "../pages/configurationsPage/configs";
import Plans from "../pages/configurationsPage/plans";
import Notifications from "../pages/notifications";
import Integrations from "../pages/resourcesPage/integrations";
import Transmitions from "../pages/resourcesPage/transmitions";
import User from "../pages/user";

const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<HomeContainer />} />
                <Route path="/bets" element={<Bets />} />
                <Route path="/configs" element={<MainConfigs />} />
                <Route path="/plans" element={<Plans />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/integrations" element={<Integrations />} />
                <Route path="/transmitions" element={<Transmitions />} />
                <Route path="/user" element={<User />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;