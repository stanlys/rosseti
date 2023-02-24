import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import "@inovua/reactdatagrid-community/index.css";
import { filterValue } from "../../components/Grid/OutLetter/OutFilter";
import LettersList from "../../components/Grid/LettersList";
import style from "./Incoming.module.scss";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import ButtonStandby from "../../components/Buttons/ButtonStandby";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import {
  INCOMING_COLUMNS_ORDER,
  IN_LETTER_COLUMNS,
} from "../../components/Grid/InLetter/InColumns";

const Incoming = () => {
  const gridStyle = { minHeight: "100%", color: "#223133" };

  const letters = useAppSelector((state) => state.outgoing);
  const dispatch = useAppDispatch();

  useEffect(() => {
    // console.log("load letters");
  }, []);

  return (
    <Stack>
      <Box className={style.buttonGroup}>
        <Typography variant="h6">
          <KeyboardDoubleArrowRightIcon />
          Входящие
        </Typography>
        <Button variant="outlined"> Создать письмо </Button>
        <ButtonStandby />
      </Box>
      <LettersList
        columns={IN_LETTER_COLUMNS}
        style={gridStyle}
        data={[]}
        filter={filterValue}
        columnOrderDefault={INCOMING_COLUMNS_ORDER}
        LocalStorageKey="OUTGOING"
      />
    </Stack>
  );
};

export default Incoming;
