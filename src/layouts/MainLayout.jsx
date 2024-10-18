import React from "react";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      {/* outlet */}
      <h2>main</h2>
      {/* footer */}
    </div>
  );
};

export default MainLayout;
