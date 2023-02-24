import { Box, Typography } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import style from "./Uploader.module.scss";

interface UploadTitleProps {
  title: string;
}

const UploadTitle: React.FC<UploadTitleProps> = ({ title }) => {
  return (
    <Box display={"flex"} className={style.caption}>
      <CloudUploadIcon />
      <Typography variant="h6" ml={2}>
        {title}
      </Typography>
    </Box>
  );
};

export default UploadTitle;
