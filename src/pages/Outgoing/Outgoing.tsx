import {
  Box,
  Button,
  getOutlinedInputUtilityClass,
  Stack,
} from "@mui/material";
import React, { useEffect } from "react";
import "@inovua/reactdatagrid-community/index.css";
import { filterValue } from "../../components/Grid/OutLetter/OutFilter";
import {
  OUT_LETTER_COLUMNS,
  OUTGOING_COLUMNS_ORDER,
} from "../../components/Grid/OutLetter/OutColumns";
import LettersList from "../../components/Grid/LettersList";
import style from "./Outgoing.module.scss";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import ButtonStandby from "../../components/Buttons/ButtonStandby";
import { getAllOutgoingLetter } from "../../store/outgoing/thunks";
import { Link } from "react-router-dom";

const Outgoing = () => {
  const gridStyle = { height: "82vh", color: "#223133" };

  const letters = useAppSelector((state) => state.outgoing);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllOutgoingLetter());
  }, []);

  return (
    <Stack>
      <Box className={style.buttonGroup}>
        <Link to="/addin">
          <Button variant="outlined"> Создать письмо </Button>
        </Link>
        <ButtonStandby />
      </Box>
      <LettersList
        columns={OUT_LETTER_COLUMNS}
        style={gridStyle}
        data={letters.letters}
        filter={filterValue}
        columnOrderDefault={OUTGOING_COLUMNS_ORDER}
        LocalStorageKey="OUTGOING"
      />
    </Stack>
  );
};

export default Outgoing;
