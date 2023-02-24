import React from "react";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ButtonBack = () => {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate(-1)} variant="text">
      <KeyboardDoubleArrowLeftIcon />
      НАЗАД
    </Button>
  );
};

export default ButtonBack;
