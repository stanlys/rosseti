import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import { useFormik } from "formik";
import style from "./AddLetter.module.scss";
import React from "react";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ru";
import { INIT_ADD_LETTER } from "./initValue";
import { validateYup } from "./validateForm";
import DateSelect from "../../../components/EntryField/DateSelect";
import EntryField from "../../../components/EntryField/EntryField";
import { formFields } from "./formFields";
import { useSnackbar } from "notistack";
import { ICreatedPostLetter } from "../../../interfaces/postLetter";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { addPostLetter } from "../../../store/postLetter/thunk";
import { API_ENDPOINTS } from "../../../api/URL";
import SelectFromList from "./SelectFromList";
import FormTitle from "../../../components/FormTitle/FormTitle";

const AddLetter = () => {
  const [date, setDate] = React.useState<Dayjs | null>(dayjs(Date.now()));
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const { error } = useAppSelector((state) => state.postLetter);
  const dispatch = useAppDispatch();

  const {
    values,
    errors,
    isValid,
    setFieldValue,
    touched,
    handleChange,
    handleReset,
  } = useFormik({
    initialValues: INIT_ADD_LETTER,
    validationSchema: validateYup,
    onSubmit: () => {},
  });

  const changeDate = (newValue: Dayjs | null) => {
    setFieldValue("date", newValue, false);
    setDate(newValue);
  };

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    const addedPostLetter: ICreatedPostLetter = {
      address: values.address,
      date: values.date,
      letterType: values.letterType,
      letterDescription: values.letterDescription,
      postman: values.postman,
      receiver: values.receiver,
      sender: values.sender,
      trackNumber: values.trackNumber,
    };
    dispatch(addPostLetter(addedPostLetter));
    if (error == null) {
      enqueueSnackbar("письмо добавлено", { variant: "success" });
      handleReset(e);
      changeDate(dayjs(Date.now()));
    } else {
      enqueueSnackbar("ошибка добавления", { variant: "error" });
    }
  };

  return (
    <Box>
      <FormTitle caption="Добавление почтового отправления"></FormTitle>
      <Box component={"form"} onSubmit={submitForm}>
        <Paper elevation={2} className={style.form}>
          <DateSelect
            changeDate={changeDate}
            value={date}
            error={errors.date as string}
            isError={Boolean(touched.date) && Boolean(errors.date)}
          />
          <EntryField
            error={errors.trackNumber}
            isError={
              Boolean(touched.trackNumber) && Boolean(errors.trackNumber)
            }
            value={values.trackNumber}
            onChange={handleChange}
            {...formFields.trackNumber}
          />
          <EntryField
            error={errors.letterType}
            isError={Boolean(touched.letterType) && Boolean(errors.letterType)}
            value={values.letterType}
            onChange={handleChange}
            {...formFields.letterType}
          />
          <SelectFromList
            onChange={setFieldValue}
            value={values.postman}
            {...formFields.postman}
            name={""}
            isError={false}
            error={undefined}
          />
          <EntryField
            error={errors.receiver}
            isError={Boolean(touched.receiver) && Boolean(errors.receiver)}
            value={values.receiver}
            onChange={handleChange}
            {...formFields.receiver}
          />
          <EntryField
            error={errors.address}
            isError={Boolean(touched.address) && Boolean(errors.address)}
            value={values.address}
            onChange={handleChange}
            {...formFields.address}
          />
          <EntryField
            error={errors.sender}
            isError={Boolean(touched.sender) && Boolean(errors.sender)}
            value={values.sender}
            onChange={handleChange}
            {...formFields.sender}
          />
          <EntryField
            error={errors.letterDescription}
            isError={
              Boolean(touched.letterDescription) &&
              Boolean(errors.letterDescription)
            }
            value={values.letterDescription}
            onChange={handleChange}
            {...formFields.letterDescription}
          />
          <Button
            type="submit"
            variant="outlined"
            color="success"
            disabled={!isValid}
          >
            Добавить
          </Button>
        </Paper>
      </Box>
    </Box>
  );
};

export default AddLetter;
