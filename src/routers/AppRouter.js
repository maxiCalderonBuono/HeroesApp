import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Loginpage } from "../components/login/Loginpage";
import { DashboardRouter } from "./DashboardRouter";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Loginpage />} />
        <Route path="/*" element={<DashboardRouter />} />
      </Routes>
    </Router>
  );
};
