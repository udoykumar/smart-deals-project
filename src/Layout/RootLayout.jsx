import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const RootLayout = () => {
  return (
    <div className="container mx-auto">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
