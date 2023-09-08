import React from "react";
import { Route, Routes } from "react-router-dom";

import MainPage from "./pages/Main";
import RepositoriesPage from "./pages/Repositories";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/repositories"
      element={<RepositoriesPage />} />

      <Route path="/"
      element={<MainPage />} />
    </Routes>
  );
}
