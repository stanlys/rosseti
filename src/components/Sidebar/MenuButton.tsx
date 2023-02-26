import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useMinWidth } from "../../hooks/useResponsive";
import { MEDIA } from "../../hooks/constants";

interface MenuButtonProps {
  link: string;
  caption: string;
  icon: JSX.Element;
}

const MenuButton: React.FC<MenuButtonProps> = ({ caption, icon, link }) => {
  const matches = useMinWidth(MEDIA.md);

  return (
    <Link to={link}>
      <ListItemButton>
        <ListItemIcon>{icon}</ListItemIcon>
        {matches && <ListItemText primary={caption} />}
      </ListItemButton>
    </Link>
  );
};

export default MenuButton;
