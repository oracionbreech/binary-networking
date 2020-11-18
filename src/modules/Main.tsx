import React from "react";
import AppSideBar from "./AppSideBar/AppSideBar";
import Navbar from "./NavBar/Navbar";
import Routes from "./Routes/Routes";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";

export default function Main() {
  const history = useHistory();

  return (
    <div>
      <Helmet>
        <title>Binary Network</title>
      </Helmet>
      <AppSideBar>
        <Navbar />
        <Routes />
      </AppSideBar>
    </div>
  );
}
