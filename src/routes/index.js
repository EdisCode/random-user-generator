import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Users, PageNotFound } from "../components";

function AppRoute() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default AppRoute;
