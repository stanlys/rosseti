import { TypeFilterValue } from "@inovua/reactdatagrid-community/types";

export const filterLetters: TypeFilterValue = [
  { name: "trackNumber", operator: "contains", type: "string", value: "" },
  {
    name: "date",
    operator: "eq",
    type: "date",
    value: "",
  },
  {
    name: "postman",
    operator: "contains",
    type: "string",
    value: "",
  },
  { name: "letterType", operator: "contains", type: "string", value: "" },
  { name: "receiver", operator: "contains", type: "string", value: "" },
  { name: "address", operator: "contains", type: "string", value: "" },
  {
    name: "letterDescription",
    operator: "contains",
    type: "string",
    value: "",
  },
  {
    name: "sender",
    operator: "notEmpty",
    type: "string",
    value: " ",
  },
];
