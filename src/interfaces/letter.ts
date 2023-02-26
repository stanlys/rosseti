import { Dayjs } from "dayjs";

export interface IDocument {
  _id: string;
  fileName: string;
  path: string;
  size: number;
  dateTime: Date;
}

export interface ILetter {
  _id: string;
  date: number;
  outNumber: string;
  sender: string;
  receiver: string;
  letterType: string;
  inNumber: string;
  dateOrder: Dayjs | null;
  executor: string;
  letterTitle: string;
  responseToIncoming: string;
  appendFile?: string;
  files: Array<IDocument>;
}

export type ICreatedLetter = Omit<ILetter, "_id">;

export interface ILoadLetter {
  isLoading: boolean;
  error: string | null;
  letters: Array<ILetter>;
}
