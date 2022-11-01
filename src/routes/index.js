import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Users, PageNotFound } from "../components";

function AppRoute() {
  return (
    <>
      <Routes>
        <Route exact index element={<Home />} />
        <Route exact path="/users" element={<Users />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default AppRoute;
