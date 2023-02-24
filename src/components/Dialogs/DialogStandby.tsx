import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useAppDispatch } from "../../store/hooks";
import { useSnackbar } from "notistack";
import { ICreatedLetter } from "../../interfaces/letter";
import { createOutgoingLetter } from "../../store/outgoing/thunks";

interface StandbyFormDialogProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

const StandbyFormDialog: React.FC<StandbyFormDialogProps> = ({
  isOpen,
  toggleOpen,
}) => {
  const [FIO, setFIO] = React.useState<string>("");
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const dispatch = useAppDispatch();

  const addEmptyLetter = () => {
    if (FIO.length <= 1) return;
    const letter: ICreatedLetter = {
      date: Date.now(),
      sender: FIO,
      outNumber: "-",
      dateOrder: " ",
      executor: "-",
      inNumber: "-",
      letterTitle: "-",
      letterType: "Письмо",
      receiver: "-",
      ResponseToIncoming: "-",
    };
    enqueueSnackbar("Успешно добавлено", { variant: "success" });
    dispatch(createOutgoingLetter(letter));
    toggleOpen();
  };

  return (
    <Dialog open={isOpen} onClose={toggleOpen}>
      <DialogTitle>Резервирование</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Укажите ФИО сотрудника, который просит исходящий номер.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          label="Кто просит исходящий номер"
          type="text"
          fullWidth
          value={FIO}
          onChange={(e) => setFIO(e.currentTarget.value)}
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={toggleOpen}>Отменить</Button>
        <Button onClick={addEmptyLetter}>Добавить</Button>
      </DialogActions>
    </Dialog>
  );
};

export default StandbyFormDialog;
