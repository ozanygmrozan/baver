import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footor";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
