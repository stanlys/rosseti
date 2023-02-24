import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./../../assets/Logo.png";
import { Box } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const KTHeader = () => {
  return (
    <Box
      component={"div"}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 2,
        paddingLeft: 3,
        paddingRight: 3,
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
      }}
    >
      <NavLink to={"/"}>
        <Box component={"img"} src={logo} width={"5rem"}></Box>
      </NavLink>
      <Box>
        <AccountCircleIcon fontSize="large" />
      </Box>
    </Box>
  );
};

export default KTHeader;
