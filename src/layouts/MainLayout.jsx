import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* outlet */}
      <Outlet></Outlet>

      {/* footer */}
    </div>
  );
};

export default MainLayout;
