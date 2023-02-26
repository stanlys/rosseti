import { TypeColumn } from "@inovua/reactdatagrid-community/types";
import { IconButton } from "@mui/material";
import PageviewIcon from "@mui/icons-material/Pageview";
import DeleteIcon from "@mui/icons-material/Delete";
import DateFilter from "@inovua/reactdatagrid-community/DateFilter";
import moment from "moment";

export const columns: TypeColumn[] = [
  {
    name: "preview",
    header: "Просмотр",
    maxWidth: 100,
    defaultFlex: 1,
    render: ({ data }) => {
      return (
        <>
          <IconButton
            color="primary"
            onClick={() => console.log("Просмотр", data.outNumber)}
          >
            <PageviewIcon />
          </IconButton>
          <IconButton
            color="primary"
            onClick={() => console.log("Просмотр", data.outNumber)}
          >
            <PageviewIcon />
          </IconButton>
        </>
      );
    },
  },
  {
    name: "outNumber",
    header: "№ Исх.",
    maxWidth: 150,
    defaultFlex: 1,

    style: { color: "primary", fontWeight: "bold" },
  },
  {
    name: "date",
    header: "Дата",
    dateFormat: "YYYY-MM-DD",
    minWidth: 10,
    defaultFlex: 1,
    filterEditor: DateFilter,
    filterEditorProps: {
      dateFormat: "MM-DD-YYYY",
      highlightWeekends: true,
      placeholder: "введите дату",
    },
    render: ({ value }: { value: string }) => {
      return moment(value).format("MM-DD-YYYY");
    },
  },
  { name: "inNumber", header: "№ Вх.", defaultFlex: 1 },
  {
    name: "dateOrder",
    header: "Дата получения",
    defaultFlex: 1,
    dateFormat: "YYYY-MM-DD",
    filterEditor: DateFilter,
    filterEditorProps: {
      dateFormat: "MM-DD-YYYY",
      highlightWeekends: true,
      placeholder: "введите дату",
    },
    render: ({ value }: { value: string }) => {
      return value === "" ? "" : moment(value).format("MM-DD-YYYY");
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
  {
    name: "delete",
    header: "Удалить",
    maxWidth: 50,
    defaultFlex: 1,
    render: ({ data }) => {
      return (
        <IconButton
          color="error"
          onClick={() => console.log("delete", data.outNumber)}
        >
          <DeleteIcon />
        </IconButton>
      );
    },
  },
];
