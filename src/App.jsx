import React from "react";
import "normalize.css";
import "./App.css";
import { PlanetsListPage, PlanetDetailsPage, NotFoundPage } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./modules";
import { ROUTES } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<MainLayout />}>
          <Route path={ROUTES.PLANET_LIST} element={<PlanetsListPage />} />
          <Route path={ROUTES.PLANET_DETAILS} element={<PlanetDetailsPage />} />
          <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
