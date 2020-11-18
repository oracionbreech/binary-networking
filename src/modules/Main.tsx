import React from "react";
import AppSideBar from "./AppSideBar/AppSideBar";
import Navbar from "./NavBar/Navbar";
import Routes from "./Routes/Routes";

export default function Main() {
  return (
    <div>
      <AppSideBar>
        <Navbar />
        <Routes />
      </AppSideBar>
    </div>
  );
}
