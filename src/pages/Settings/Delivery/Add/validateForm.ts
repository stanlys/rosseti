import * as Yup from "yup";

export const validateYupDelivery = Yup.object({
  orgname: Yup.string()
    .min(4, "Должно быть длиннее 6 символов")
    .required("Обязательное поле"),
  phone: Yup.string()
    .min(6, "Должно быть длиннее 6 символов")
    .required("Обязательное поле"),
  website: Yup.string()
    .required("Обязательное поле")
    .min(5, "Должно быть длинне 7 символов"),
});
