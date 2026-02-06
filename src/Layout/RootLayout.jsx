import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header/Header";

const RootLayout = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <Outlet />
    </div>
  );
};

export default RootLayout;
