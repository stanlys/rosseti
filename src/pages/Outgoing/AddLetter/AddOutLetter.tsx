import { Box, Button, Divider, Paper } from "@mui/material";
import { useFormik } from "formik";
import style from "./AddOutLetter.module.scss";
import React, { useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ru";
import { INIT_ADD_LETTER } from "./initValue";
import { validateYup } from "./validateForm";
import EntryField from "../../../components/EntryField/EntryField";
import { formFields } from "./formFields";
import { useSnackbar } from "notistack";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { createOutgoingLetter } from "../../../store/outgoing/thunks";
import FormTitle from "../../../components/FormTitle/FormTitle";
import DateSelect from "../../../components/EntryField/DateSelect";
import "react-dropzone-uploader/dist/styles.css";
import Uploader from "../../../components/Uploader/Uploader";
import { IDocument } from "../../../interfaces/letter";

const AddOutLetter = () => {
  const [date, setDate] = React.useState<Dayjs | null>(null);
  const [files, setFiles] = React.useState<Array<IDocument>>([]);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [uploadStatus, setUploadStatus] = React.useState<string>("");

  const { error } = useAppSelector((state) => state.postLetter);
  const dispatch = useAppDispatch();

  const inFile = [];

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

  // const onChange = (e: React.FormEvent<HTMLInputElement>) => {
  //   const files = (e.target as HTMLInputElement).files;
  //   if (files) {
  //     setFile(files[0]);
  //   }
  // };

  useEffect(() => {
    setFieldValue("files", files);
  }, [files]);

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createOutgoingLetter(values));
    console.log(values);
    if (error == null) {
      enqueueSnackbar("письмо добавлено", { variant: "success" });
      handleReset(e);
    } else {
      enqueueSnackbar("ошибка добавления", { variant: "error" });
    }
  };

  const onDone = async (document: IDocument) => {
    setFiles((files) => [...files, document]);
  };

  return (
    <Box>
      <FormTitle caption="Добавление исходящего письма"></FormTitle>
      <Box component={"form"} onSubmit={submitForm}>
        <Paper elevation={2} className={style.form}>
          <Uploader onDone={onDone} />
          <Box className={style.formControl}>
            <Box className={style.formControlArea}>
              <EntryField
                error={errors.receiver}
                isError={Boolean(touched.receiver) && Boolean(errors.receiver)}
                value={values.receiver}
                onChange={handleChange}
                {...formFields.receiver}
              />
              <EntryField
                error={errors.letterTitle}
                isError={
                  Boolean(touched.letterTitle) && Boolean(errors.letterTitle)
                }
                value={values.letterTitle}
                onChange={handleChange}
                {...formFields.letterTitle}
              />
              <EntryField
                error={errors.sender}
                isError={Boolean(touched.sender) && Boolean(errors.sender)}
                value={values.sender}
                onChange={handleChange}
                {...formFields.sender}
              />

              <EntryField
                error={errors.executor}
                isError={Boolean(touched.executor) && Boolean(errors.executor)}
                value={values.executor}
                onChange={handleChange}
                {...formFields.executor}
              />
            </Box>
            <Box className={style.formControlArea}>
              <DateSelect
                label="Дата получения письма"
                value={date}
                changeDate={changeDate}
                error={errors.dateOrder as string}
                isError={Boolean(touched.dateOrder)}
              />
              <EntryField
                error={errors.inNumber}
                isError={Boolean(touched.inNumber) && Boolean(errors.inNumber)}
                value={values.inNumber}
                onChange={handleChange}
                {...formFields.inNumber}
              />
              <EntryField
                error={errors.responseToIncoming}
                isError={
                  Boolean(touched.responseToIncoming) &&
                  Boolean(errors.responseToIncoming)
                }
                value={values.responseToIncoming}
                onChange={handleChange}
                {...formFields.responseToIncoming}
              />
            </Box>
          </Box>
          <Box>
            <Divider />
            <Box gap={2} display="flex" justifyContent={"center"} mt={2}>
              <Button
                type="submit"
                variant="outlined"
                color="success"
                disabled={!isValid}
              >
                Добавить
              </Button>
              <Button type="reset" variant="outlined" color="error">
                Очистить
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default AddOutLetter;
