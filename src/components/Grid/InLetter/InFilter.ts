import { TypeFilterValue } from "@inovua/reactdatagrid-community/types";

export const filterValue_InLetter: TypeFilterValue = [
  {
    name: "sender",
    operator: "notEmpty",
    type: "string",
    value: " ",
  },
  {
    name: "date",
    operator: "eq",
    type: "date",
    value: "",
  },
  {
    name: "dateOrder",
    operator: "eq",
    type: "date",
    value: "",
  },
  { name: "outNumber", operator: "contains", type: "string", value: "" },
  { name: "inNumber", operator: "contains", type: "string", value: "" },
  { name: "executor", operator: "contains", type: "string", value: "" },
  { name: "receiver", operator: "contains", type: "string", value: "" },
  { name: "letterType", operator: "contains", type: "string", value: "" },
  { name: "letterTitle", operator: "contains", type: "string", value: "" },
  {
    name: "ResponseToIncoming",
    operator: "contains",
    type: "string",
    value: "",
  },
];
