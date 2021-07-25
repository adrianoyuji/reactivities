import { observer } from "mobx-react-lite";
import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";

const NavBar = () => {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item exact as={NavLink} to="/" header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: "0.5rem" }}
          />
          Reactivities
        </Menu.Item>
        <Menu.Item as={NavLink} to="/activities" name="Activities" />
        <Menu.Item name="createActivities">
          <Button
            as={NavLink}
            to="/createActivities"
            positive
            content="Create Activity"
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default observer(NavBar);
