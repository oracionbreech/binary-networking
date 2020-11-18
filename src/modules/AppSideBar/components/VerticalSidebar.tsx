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
      <Menu.Item as="a" onClick={() => history.push("/dashboard")}>
        Dashboard
      </Menu.Item>
      <Menu.Item as="a">
        <Link to="/statistics">Statistics</Link>
      </Menu.Item>
      <Menu.Item as="a">Transactions</Menu.Item>
      <Menu.Item as="a">Network</Menu.Item>
      <Divider hidden />
      <Menu.Item as="a">Tickets</Menu.Item>
      <Menu.Item as="a">Profile</Menu.Item>
      <Menu.Item as="a">Settings</Menu.Item>
    </Sidebar>
  );
}

export default VerticalSidebar;
