import React from "react";
import { Header, Segment } from "semantic-ui-react";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Header as="h3">Binary Network</Header>
      Unilevel
      <Segment basic className="main-content"></Segment>
    </div>
  );
}
