import { styled } from "@mui/material/styles";
import React from "react";
import StyledDrawerHeader from "./commonUI/StyledDrawerHeader";
import { Outlet } from "react-router-dom";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppMainContainer = ({ open }) => {
  return (
    <Main open={open}>
      <StyledDrawerHeader />
      <Outlet />
    </Main>
  );
};

export default AppMainContainer;
