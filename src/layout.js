import React from "react";
import NavBar from "./components/NavBar";

const Layout = (props) => {
  return (
    <>
      <NavBar />
      <div>{props.children}</div>
    </>
  );
};

export default Layout;
