import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Users } from "../components";

function AppRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
}

export default AppRoute;
