import styled from "@emotion/styled";
import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "Space-between",
});

export const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography variant="h5">Oduol The bug Killer</Typography>
      </StyledToolBar>
    </AppBar>
  );
};
