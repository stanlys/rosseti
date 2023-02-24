import { TypeColumn } from "@inovua/reactdatagrid-community/types";
import DateFilter from "@inovua/reactdatagrid-community/DateFilter";
import moment from "moment";
import { ActionEditPreview } from "../ActionEdit";
import { ActionDelete } from "./ActionDeleteOutLetter";

export const OUT_LETTER_COLUMNS: TypeColumn[] = [
  ...ActionEditPreview,
  {
    name: "outNumber",
    header: "Исходящий номер",
    maxWidth: 150,
    defaultFlex: 1.3,

    style: { color: "primary", fontWeight: "bold" },
  },
  {
    name: "date",
    header: "Дата",
    dateFormat: "DD.MM.YYYY",
    minWidth: 10,
    defaultFlex: 0.6,
    filterEditor: DateFilter,
    filterEditorProps: {
      dateFormat: "DD.MM.YYYY",
      highlightWeekends: true,
      placeholder: "введите дату",
    },
    render: ({ value }: { value: string }) => {
      return moment(value).format("DD.MM.YYYY");
    },
  },
  { name: "inNumber", header: "Входящий номер", defaultFlex: 1 },
  {
    name: "dateOrder",
    header: "Дата получения",
    defaultFlex: 1,
    dateFormat: "DD.MM.YYYY",
    filterEditor: DateFilter,
    filterEditorProps: {
      dateFormat: "DD.MM.YYYY",
      highlightWeekends: true,
      placeholder: "введите дату",
    },
    render: ({ value }: { value: string }) => {
      return value === null ? "-" : moment(value).format("DD.MM.YYYY");
    },
  },
  {
    name: "letterType",
    header: "Тип",
    defaultFlex: 1,
  },
  { name: "receiver", header: "Получатель", defaultFlex: 1 },
  { name: "sender", header: "Отправитель", defaultFlex: 1 },
  { name: "executor", header: "Исполнитель", defaultFlex: 1 },
  { name: "letterTitle", header: "Содержание", defaultFlex: 1 },
  { name: "ResponseToIncoming", header: "Ответ на входящий", defaultFlex: 1 },
  ...ActionDelete,
];

export const OUTGOING_COLUMNS_ORDER: Array<string> = [
  "preview",
  "date",
  "outNumber",
  "receiver",
  "letterTitle",
  "sender",
  "executor",
  "inNumber",
  "dateOrder",
  "ResponseToIncoming",
  "delete",
];
