import React from "react";
import { Route, Routes } from "react-router-dom";
import AddPage from "../pages/add-page";
import Details from "../pages/details-page";
import Home from "../pages/home-page";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-course" element={<AddPage />} />
      <Route path="/courses/:id" element={<Details />} />
    </Routes>
  );
};

export default Routing;
