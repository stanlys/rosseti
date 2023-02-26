import { TypeColumn } from "@inovua/reactdatagrid-community/types";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch } from "../../store/hooks";
import { deletePostLetter } from "../../store/postLetter/thunk";

interface ActionDeleteButtonProps {
  id: string;
}

const ActionDeleteButton: React.FC<ActionDeleteButtonProps> = ({ id }) => {
  const dispatch = useAppDispatch();

  return (
    <IconButton
      color="error"
      onClick={() => {
        console.log("delete:", id);
        dispatch(deletePostLetter(id));
      }}
    >
      <DeleteIcon />
    </IconButton>
  );
};

export const ActionDelete: TypeColumn[] = [
  {
    name: "delete",
    header: "Удалить",
    maxWidth: 50,
    defaultFlex: 1,
    render: ({ data }) => {
      return (
        <IconButton color="error" onClick={() => {}}>
          <DeleteIcon />
        </IconButton>
      );
    },
  },
];
