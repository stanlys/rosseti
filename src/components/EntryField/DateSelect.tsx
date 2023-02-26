import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box, Button, TextField } from "@mui/material";
import React from "react";
import style from "./DateSelect.module.scss";
import dayjs, { Dayjs } from "dayjs";

interface DateSelectProps {
  label: string;
  value: Dayjs | null;
  isError: boolean;
  error: string;
  changeDate: (newValue: Dayjs | null) => void;
}

const DateSelect: React.FC<DateSelectProps> = ({
  value,
  label,
  isError,
  error,
  changeDate,
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={"ru"}>
      <Box className={style.datePickerGroup}>
        <DesktopDatePicker
          label={label}
          value={value}
          onChange={changeDate}
          inputFormat="DD.MM.YYYY"
          renderInput={(params) => (
            <TextField
              {...params}
              sx={{ width: 250 }}
              name="date"
              variant="standard"
              helperText={error}
              error={isError}
            />
          )}
        />
        <Button onClick={() => changeDate(dayjs(Date.now()).add(-1, "day"))}>
          Вчера
        </Button>
      </Box>
    </LocalizationProvider>
  );
};

export default DateSelect;
