import { Box, Typography, Divider } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import { settingList } from "../../components/Sidebar/MenuItems";
import Sidebar from "../../components/Sidebar/Sidebar";
import style from "./Settings.module.scss";

const Settings = () => {
  return (
    <Box>
      <Typography variant="h5">Настройки</Typography>
      <Box className={style.wrapper}>
        <Sidebar mainMenu={settingList} elevation={0} />
        <Divider orientation="vertical" flexItem />
        <Box p={2}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
};

export default Settings;
