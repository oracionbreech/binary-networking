import React from "react";
import { Header, Segment } from "semantic-ui-react";

export default function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <Header as="h3">Welcome!</Header>
      <Segment basic className="main-content">
        Content Goes Here
      </Segment>
    </div>
  );
}
