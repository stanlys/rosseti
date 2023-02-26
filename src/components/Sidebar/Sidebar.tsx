import React from "react";
import { Box, Divider, List } from "@mui/material";
import Paper from "@mui/material/Paper";
import { SideBarHidden, useMinWidth } from "../../hooks/useResponsive";

interface SidebarProps {
  mainMenu?: JSX.Element;
  subMenu?: JSX.Element;
  elevation: number;
}

const Sidebar: React.FC<SidebarProps> = ({ mainMenu, subMenu, elevation }) => {
  return (
    <SideBarHidden>
      <Paper elevation={elevation}>
        <List component="nav">
          {mainMenu}
          <Divider sx={{ my: 1 }} />
          {subMenu}
        </List>
      </Paper>
    </SideBarHidden>
  );
};

export default Sidebar;
