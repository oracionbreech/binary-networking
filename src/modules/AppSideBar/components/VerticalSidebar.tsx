import React from "react";
import { Sidebar, Menu, Divider } from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";

function VerticalSidebar({ animation, direction, visible }: any) {
  const history = useHistory();
  console.log(history);

  return (
    <Sidebar
      as={Menu}
      animation={animation}
      className="app-vertical-sidebar"
      direction={direction}
      icon="labeled"
      inverted
      vertical
      visible={visible}
      width="thin"
    >
      <Menu.Item as="a">
        <Link to="/dashboard">Dashboard</Link>
      </Menu.Item>
      <Menu.Item as="a">
        <Link to="/statistics">Statistics</Link>
      </Menu.Item>
      <Menu.Item as="a">
        <Link to="/transactions">Transactions</Link>
      </Menu.Item>
      <Menu.Item as="a">
        <Link to="/networks">Networks</Link>
      </Menu.Item>
      <Divider hidden />
      <Menu.Item as="a">
        <Link to="/tickets">Tickets</Link>
      </Menu.Item>
      <Menu.Item as="a">
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item as="a">
        <Link to="/settings">Settings</Link>
      </Menu.Item>
    </Sidebar>
  );
}

export default VerticalSidebar;
