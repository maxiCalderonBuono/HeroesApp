import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Loginpage } from "../components/login/Loginpage";
import { DashboardRouter } from "./DashboardRouter";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
    
        
        <Route
          path="/login"
          element={
            <PublicRoutes>
              <Loginpage />
            </PublicRoutes>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoutes>
              <DashboardRouter />
            </PrivateRoutes>
          }
        />
      </Routes>
    </Router>
  );
};
