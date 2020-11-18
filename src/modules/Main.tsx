import React from "react";
import { Segment, Header, Button } from "semantic-ui-react";
import { changeAnimation } from "../actions/SidebarActions";
import AppSideBar from "./AppSideBar/AppSideBar";
import { SLIDE_ALONG_ANIMATION } from "./AppSideBar/constants";
import { useDispatch } from "react-redux";

export default function Main() {
  const dispatch = useDispatch();

  return (
    <div>
      <AppSideBar>
        <Segment className="main-content" basic>
          <Header as="h3">Binary Network</Header>
          <Segment basic>
            <Button
              onClick={() => dispatch(changeAnimation(SLIDE_ALONG_ANIMATION))}
            >
              Slide Along
            </Button>
          </Segment>
        </Segment>
      </AppSideBar>
    </div>
  );
}
