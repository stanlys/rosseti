import { ICreatedLetter } from "../../../interfaces/letter";

export const INIT_ADD_LETTER: ICreatedLetter = {
  date: Date.now(),
  outNumber: "",
  sender: "",
  receiver: "",
  letterType: "",
  inNumber: "",
  dateOrder: null,
  executor: "",
  letterTitle: "",
  responseToIncoming: "",
  appendFile: "",
  files: [],
};
