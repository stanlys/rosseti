import { deleteLetter } from "../../../api/letter";

export const deletePostLetterById = (id: string) => {
  deleteLetter(id);
};
