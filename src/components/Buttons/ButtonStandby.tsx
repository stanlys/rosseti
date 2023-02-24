import { Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../../store/hooks";
import StandbyFormDialog from "../Dialogs/DialogStandby";

const ButtonStandby = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleOpen = () => setOpen(!open);

  return (
    <>
      <Button variant="outlined" onClick={toggleOpen}>
        Сформировать отчет
      </Button>
      <StandbyFormDialog isOpen={open} toggleOpen={toggleOpen} />
    </>
  );
};

export default ButtonStandby;
