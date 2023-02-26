import { TypeColumn } from "@inovua/reactdatagrid-community/types";
import ShareIcon from "@mui/icons-material/Share";

interface ActionDeleteButtonProps {
  website: string;
}

const ActionLinkButton: React.FC<ActionDeleteButtonProps> = ({ website }) => {
  return (
    <a href={`http://${website}`} target="_blank">
      <ShareIcon color="success" />
    </a>
  );
};

export const ActionGoToWebsite: TypeColumn[] = [
  {
    name: "preview",
    header: "Управление",
    maxWidth: 50,
    defaultFlex: 1,
    render: ({ data }) => {
      return <ActionLinkButton website={data.postman.website} />;
    },
  },
];
