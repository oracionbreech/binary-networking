import React from "react";
import { Segment, Sidebar } from "semantic-ui-react";
import VerticalSidebar from "./components/VerticalSidebar";
import { useSelector } from "react-redux";

export default function AppSideBar({ children }: any) {
  const sidebarState = useSelector((state: any) => state.Sidebar);

  const { animation, visible } = sidebarState;

  return (
    <div>
      <Sidebar.Pushable as={Segment}>
        <VerticalSidebar
          animation={animation}
          direction="left"
          visible={visible}
        />
        <Sidebar.Pusher>{children}</Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
}
