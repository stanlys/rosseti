import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import ButtonBack from "../Buttons/ButtonBack";
import style from "./FormTitle.module.scss";

interface FormTitleProps {
  caption: string;
  children?: JSX.Element;
}

const FormTitle: React.FC<FormTitleProps> = ({ caption, children }) => {
  return (
    <>
      <Box className={style.title}>
        <ButtonBack />
        {children}
        <Typography variant="button">{caption} </Typography>
      </Box>
      <Divider sx={{ mt: 0.1 }} />
    </>
  );
};

export default FormTitle;
