import React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useMinWidth } from "../../hooks/useResponsive";
import { MEDIA } from "../../hooks/constants";

interface MenuCaptionProps {
  caption: string;
}

const MenuCaption: React.FC<MenuCaptionProps> = ({ caption }) => {
  const matches = useMinWidth(MEDIA.md);
  return (
    <>
      {matches && (
        <ListSubheader component="div" inset>
          {caption}
        </ListSubheader>
      )}
    </>
  );
};

export default MenuCaption;
