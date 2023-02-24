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
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { KL } from "./../../assets/kl";

const Outgoing = () => {
  const gridStyle = { height: "82vh", color: "#223133" };
  const navigate = useNavigate();
  const isAuth = useAuth();
  if (!isAuth) {
    navigate("/auth");
  }

  const letters = useAppSelector((state) => state.outgoing);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllOutgoingLetter());
  }, []);

  return (
    <Stack>
      <Box className={style.buttonGroup}>
        <Link to="/addin">
          <Button variant="outlined"> Добавить ОЭСХ </Button>
        </Link>
        <ButtonStandby />
      </Box>
      <LettersList
        columns={OUT_LETTER_COLUMNS}
        style={gridStyle}
        data={KL}
        filter={filterValue}
        columnOrderDefault={OUTGOING_COLUMNS_ORDER}
        LocalStorageKey="OUTGOING"
      />
    </Stack>
  );
};

export default Outgoing;
