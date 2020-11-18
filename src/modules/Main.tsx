import React from "react";
import { Sidebar, Segment, Header } from "semantic-ui-react";
import AppSideBar from "./AppSideBar/AppSideBar";

export default function Main() {
  const appSideBarProps = {
    visible: true,
  };
  return (
    <div>
      <AppSideBar />
    </div>
  );
}
