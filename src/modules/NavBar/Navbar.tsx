import React from "react";
import { Button, Grid, Icon } from "semantic-ui-react";
import "./styles/Navbar.css";
import { changeAnimation } from "../../actions/SidebarActions";
import { SLIDE_ALONG_ANIMATION } from "../AppSideBar/constants";
import { useDispatch } from "react-redux";

export default function Navbar() {
  const dispatch = useDispatch();
  return (
    <Grid columns="equal" divided inverted padded>
      <Grid.Row columns="4" verticalAlign="middle" className="navbar">
        <Grid.Column>
          <Button
            onClick={() => dispatch(changeAnimation(SLIDE_ALONG_ANIMATION))}
          >
            Open Menu
          </Button>
        </Grid.Column>
        <Grid.Column className="icon-container">
          <Icon color="black" name="search" size="large" />
        </Grid.Column>
        <Grid.Column></Grid.Column>
        <Grid.Column className="icon-container">
          <Icon color="black" name="bell outline" size="large" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
