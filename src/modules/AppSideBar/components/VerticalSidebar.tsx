import React from "react";
import { Sidebar, Menu, Divider } from "semantic-ui-react";

const VerticalSidebar = ({ animation, direction, visible }: any) => (
  <Sidebar
    as={Menu}
    animation={animation}
    className="app-vertical-sidebar"
    direction={direction}
    icon="labeled"
    inverted
    vertical
    visible={visible}
    width="wide"
  >
    <Menu.Item as="a">Dashboard</Menu.Item>
    <Menu.Item as="a">Statistics</Menu.Item>
    <Menu.Item as="a">Transactions</Menu.Item>
    <Menu.Item as="a">Network</Menu.Item>

    <Divider hidden />

    <Menu.Item as="a">Tickets</Menu.Item>
    <Menu.Item as="a">Profile</Menu.Item>
    <Menu.Item as="a">Settings</Menu.Item>
  </Sidebar>
);

export default VerticalSidebar;
