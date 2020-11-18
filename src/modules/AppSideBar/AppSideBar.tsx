import React from "react";
import { Button, Header, Image, Segment, Sidebar } from "semantic-ui-react";
import VerticalSidebar from "./components/VerticalSidebar";

function exampleReducer(state: any, action: any) {
  switch (action.type) {
    case "CHANGE_ANIMATION":
      return { ...state, animation: action.animation, visible: !state.visible };
    case "CHANGE_DIMMED":
      return { ...state, dimmed: action.dimmed };
    case "CHANGE_DIRECTION":
      return { ...state, direction: action.direction, visible: false };
    default:
      throw new Error();
  }
}

function SidebarExampleTransitions() {
  const [state, dispatch] = React.useReducer(exampleReducer, {
    animation: "overlay",
    direction: "left",
    dimmed: false,
    visible: false,
  });

  const { animation, dimmed, direction, visible } = state;

  return (
    <div>
      {/* winner */}
      <Button
        onClick={() =>
          dispatch({ type: "CHANGE_ANIMATION", animation: "slide along" })
        }
      >
        Slide Along
      </Button>
      {/* winner */}

      <Sidebar.Pushable as={Segment} style={{ overflow: "hidden" }}>
        <VerticalSidebar
          animation={animation}
          direction={direction}
          visible={visible}
        />

        <Sidebar.Pusher>
          <Segment raised>
            <Header as="h3">Application Content</Header>
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
}

export default SidebarExampleTransitions;
