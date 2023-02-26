import { TypeColumn } from "@inovua/reactdatagrid-community/types";
import { ActionEditPreview } from "../ActionEdit";
import { ActionDelete } from "./ActionDeleteOutLetter";

export const OUT_LETTER_COLUMNS: TypeColumn[] = [
  ...ActionEditPreview,
  {
    name: "inv",
    header: "Инвентарный номер",
    maxWidth: 150,
    defaultFlex: 1.3,

    style: { color: "primary", fontWeight: "bold" },
  },
  {
    name: "res",
    header: "РЭС",
    minWidth: 10,
    defaultFlex: 0.6,
  },
  { name: "workName", header: "Наименование", defaultFlex: 1 },
  {
    name: "length",
    header: "Протяженность",
    defaultFlex: 1,
  },
  {
    name: "classV",
    header: "Класс",
    defaultFlex: 1,
  },
  { name: "executor", header: "Получатель", defaultFlex: 1 },
  { name: "sender", header: "Отправитель", defaultFlex: 1 },
  { name: "kpResultNumber", header: "Исполнитель", defaultFlex: 1 },
  { name: "kpResultDate", header: "Дата внесения в ЕГРН", defaultFlex: 1 },
  { name: "zouitNumber", header: "ЗОУИТ", defaultFlex: 1 },
  ...ActionDelete,
];

export const OUTGOING_COLUMNS_ORDER: Array<string> = [
  "preview",
  "inv",
  "res",
  "workName",
  "length",
  "classV",
  "executor",
  "kpResultNumber",
  "kpResultDate",
  "zouitNumber",
  "delete",
];
