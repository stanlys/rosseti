import * as Yup from "yup";

export const validateYup = Yup.object({
  trackNumber: Yup.string()
    .min(6, "Должно быть длиннее 6 символов")
    .required("Обязательное поле"),
  receiver: Yup.string()
    .min(6, "Должно быть длиннее 6 символов")
    .required("Обязательное поле"),
  postman: Yup.string()
    .required("Обязательное поле")
    .min(7, "Должно быть длинне 7 символов"),
  letterType: Yup.string()
    .required("Обязательное поле")
    .min(5, "Должно быть длинне 5 символов"),
  address: Yup.string()
    .min(6, "Должно быть длиннее 6 символов")
    .required("Обязательное поле"),
  letterDescription: Yup.string()
    .required("Обязательно поле")
    .min(1, "Хотя бы один символ"),
  sender: Yup.string()
    .min(6, "Должно быть длиннее 6 символов")
    .required("Обязательное поле"),
});
