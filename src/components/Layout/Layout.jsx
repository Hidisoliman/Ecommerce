import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navebar/Navbar";
import Footer from "../Footer/footer";
export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet></Outlet>
        <Footer />
      </div>
    </>
  );
}
