import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: "100vw", height: "100vh" }}>
      <Box
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        gap={2}
        sx={{
          display: "flex",
          height: "100%",
        }}
      >
        <Button fullWidth onClick={() => navigate(-1)}>
          Назад
        </Button>
        <Paper
          elevation={2}
          sx={{
            p: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="h3">404</Typography>
            <Divider sx={{ color: "gray", height: "1px" }} />
            <Typography variant="h5">ТАКОГО АДРЕСА НЕТ</Typography>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default NotFound;
