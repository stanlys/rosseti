import { TypeColumn } from "@inovua/reactdatagrid-community/types";
import { IconButton } from "@mui/material";
import PageviewIcon from "@mui/icons-material/Pageview";
import EditIcon from "@mui/icons-material/Edit";
import { Link, Navigate, NavLink } from "react-router-dom";

export const ActionEditPreview: TypeColumn[] = [
  {
    name: "preview",
    header: "Просмотр",
    maxWidth: 100,
    defaultFlex: 1,
    render: ({ data }) => {
      return (
        <>
          <Link to={"filelist"} state={{objectId: data._id}}>
            <IconButton
              color="primary"
              onClick={() => {
                console.log("33333");
              }}
            >
              <PageviewIcon />
            </IconButton>
          </Link>
          <IconButton
            color="primary"
            onClick={() => console.log("Просмотр", data._id)}
          >
            <EditIcon />
          </IconButton>
        </>
      );
    },
  },
];
