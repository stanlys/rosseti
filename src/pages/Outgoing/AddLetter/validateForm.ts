import * as Yup from "yup";

export const validateYup = Yup.object({
  receiver: Yup.string()
    .min(6, "Должно быть длиннее 6 символов")
    .required("Обязательное поле"),
  letterTitle: Yup.string()
    .required("Обязательное поле")
    .min(3, "Должно быть длинне 3 символов"),
  sender: Yup.string()
    .min(6, "Должно быть длиннее 6 символов")
    .required("Обязательное поле"),
});
