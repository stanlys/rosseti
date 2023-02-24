export interface IPostLetter {
  _id: string;
  date: number;
  trackNumber: string;
  letterType: string;
  letterDescription: string;
  postman: string;
  receiver: string;
  address: string;
  sender: string;
}

export type ICreatedPostLetter = Omit<IPostLetter, "_id">;

export const INITIAL_POST_LETTER: Array<IPostLetter> = [
  {
    _id: "",
    date: 0,
    trackNumber: "",
    letterType: "",
    letterDescription: "",
    postman: "",
    receiver: "",
    address: "",
    sender: "",
  },
];

export interface ILoadPostLetter {
  isLoading: boolean;
  error: string | null;
  postLetters: Array<IPostLetter>;
}
