import { Box, Button, Paper } from "@mui/material";
import { useFormik } from "formik";
import style from "./AddOrganization.module.scss";
import React from "react";
import { useSnackbar } from "notistack";
import EntryField from "../../../../components/EntryField/EntryField";
import { formFieldsDelivery } from "./formFields";
import { INIT_DELIVERY } from "./initValue";
import { validateYupDelivery } from "./validateForm";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { ICreatedDelivery, IDelivery } from "../../../../interfaces/delivery";
import { addDeliveryOrganization } from "../../../../store/Delivery/thunk";
import FormTitle from "../../../../components/FormTitle/FormTitle";

const AddDelivery = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const { error } = useAppSelector((state) => state.deliveryOrganization);
  const dispatch = useAppDispatch();

  const { values, errors, isValid, touched, handleChange, handleReset } =
    useFormik({
      initialValues: INIT_DELIVERY,
      validationSchema: validateYupDelivery,
      onSubmit: () => {},
    });

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    const addedPostman: ICreatedDelivery = {
      orgname: values.orgname,
      website: values.website,
      phone: values.phone,
    };
    dispatch(addDeliveryOrganization(addedPostman));
    if (error == null) {
      enqueueSnackbar("Организация добавлена", { variant: "success" });
      handleReset(e);
    } else {
      enqueueSnackbar("Ошибка добавления", { variant: "error" });
    }
  };

  return (
    <Box>
      <FormTitle caption="Добавление новой организации" />
      <Box component={"form"} onSubmit={submitForm}>
        <Paper elevation={0} className={style.form}>
          <EntryField
            error={errors.orgname}
            isError={Boolean(touched.orgname) && Boolean(errors.orgname)}
            value={values.orgname}
            onChange={handleChange}
            {...formFieldsDelivery.orgname}
          />
          <EntryField
            error={errors.website}
            isError={Boolean(touched.website) && Boolean(errors.website)}
            value={values.website}
            onChange={handleChange}
            {...formFieldsDelivery.website}
          />
          <EntryField
            error={errors.phone}
            isError={Boolean(touched.phone) && Boolean(errors.phone)}
            value={values.phone}
            onChange={handleChange}
            {...formFieldsDelivery.phone}
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

export default AddDelivery;
