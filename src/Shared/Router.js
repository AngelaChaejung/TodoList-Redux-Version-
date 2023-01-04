import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import DetailPage from "../Pages/DetailPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="DetailPage/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
