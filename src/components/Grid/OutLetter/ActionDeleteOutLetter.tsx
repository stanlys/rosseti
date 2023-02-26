import { TypeColumn } from "@inovua/reactdatagrid-community/types";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useAppDispatch } from "../../../store/hooks";
import { deleteOutgoingLetterById } from "../../../store/outgoing/thunks";

interface ActionDeleteButtonProps {
  id: string;
}

const ActionDeleteButton: React.FC<ActionDeleteButtonProps> = ({ id }) => {
  const dispatch = useAppDispatch();

  return (
    <IconButton
      color="error"
      onClick={() => {
        dispatch(deleteOutgoingLetterById(id));
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
      return <ActionDeleteButton id={data._id} />;
    },
  },
];
