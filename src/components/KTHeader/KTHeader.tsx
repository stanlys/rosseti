import { NavLink, useNavigate } from "react-router-dom";
import logo from "./../../../assets/logo.png";
import { Box, Button, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useAuth } from "../../hooks/useAuth";

const KTHeader = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const userExit = () => {
    localStorage.removeItem("auth");
    navigate("/");
  };

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
        <Box component={"img"} src={logo} width={"7rem"}></Box>
      </NavLink>
      <Box>
        {auth != false && (
          <Box display={"flex"} alignItems={"center"} gap={1}>
            <Typography variant="body1"> {auth} </Typography>
            <AccountCircleIcon fontSize="large" />
            <Button variant="text" onClick={userExit}>
              Выход
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default KTHeader;
