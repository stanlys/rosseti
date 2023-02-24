import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";

import StickyFooter from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { mainListItems, secondaryListItems } from "../Sidebar/MenuItems";
import KTHeader from "../KTHeader/KTHeader";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="#">
        Your Website
      </Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const mdTheme = createTheme();

const DashboardContent = () => {
  return (
    <ThemeProvider theme={mdTheme}>
      <CssBaseline />
      <KTHeader />
      <Box
        sx={{
          display: "flex",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
        }}
      >
        <Sidebar
          mainMenu={mainListItems}
          subMenu={secondaryListItems}
          elevation={1}
        />
        <Box
          component="main"
          sx={{
            mt: 0,
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            overflow: "none",
            height: "89vh",
          }}
        >
          <Box sx={{ m: 2, minHeight: "90%" }}>
            <Paper sx={{ minWidth: "100%", minHeight: "91vh", p: 2 }}>
              <Outlet />
            </Paper>
          </Box>
        </Box>
      </Box>
      <StickyFooter />
    </ThemeProvider>
  );
};

export default function Layout() {
  return <DashboardContent />;
}
