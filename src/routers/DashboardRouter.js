import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dcpage } from "../components/dc/Dcpage";
import { Heroespage } from "../components/heroes/Heroespage";
import { Marvelpage } from "../components/marvel/Marvelpage";
import { SearchPage } from "../components/search/SearchPage";
import { Navbar } from "../components/ui/Navbar";
import { IdleTimerContainer } from "../Idle/IdleTimerContainer";

export const DashboardRouter = () => {
  return (
    <>
      <IdleTimerContainer></IdleTimerContainer>
      <header>
        <Navbar />
      </header>
      <div className="container mt-2">
        <Routes>
          <Route path="/" element={<Marvelpage />} />
          <Route path="/marvel" element={<Marvelpage />} />
          <Route path="/dc" element={<Dcpage />} />
          <Route path="/heroes/:heroeId" element={<Heroespage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>
      
    </>
  );
};
