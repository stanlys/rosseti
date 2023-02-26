import { Box, Typography } from "@mui/material";
import React from "react";
import Dropzone, {
  IFileWithMeta,
  ILayoutProps,
  StatusValue,
} from "react-dropzone-uploader";
import { API_ENDPOINTS } from "../../api/URL";
import UploadTitle from "./UploaderTitle";

interface UploaderProps {
  onDone: (a: any) => void;
}

const Uploader: React.FC<UploaderProps> = ({ onDone }) => {
  const [uploadStatus, setUploadStatus] = React.useState<string>("");

  const getUploadParams = () => ({ url: API_ENDPOINTS.UPLOAD() });

  const handleChangeStatus = (
    { meta, xhr }: IFileWithMeta,
    status: StatusValue
  ) => {
    setUploadStatus(status);
    if (status === "done") {
      console.log(JSON.parse(xhr?.response));
      onDone(JSON.parse(xhr?.response));
    }
  };

  const handleSubmit = (
    files: Array<IFileWithMeta>,
    allFiles: Array<IFileWithMeta>
  ) => {
    console.log(files.map((f) => f.meta));
    allFiles.forEach((f) => f.remove());
  };

  return (
    <>
      {uploadStatus != "" && <Typography variant="body1"> </Typography>}
      <Dropzone
        getUploadParams={getUploadParams}
        LayoutComponent={Layout}
        onChangeStatus={handleChangeStatus}
        onSubmit={handleSubmit}
        autoUpload
        inputContent={
          <UploadTitle title="загрузите приложение" key={"uploader"} />
        }
        inputWithFilesContent={
          <UploadTitle title="дополните при необходимости" key={"uploader2"} />
        }
        styles={{
          dropzone: {
            overflow: "hidden",
            width: 600,
            height: 25,
            border: "1px dashed gray",
          },
          dropzoneActive: { borderColor: "green" },
          dropzoneReject: { borderColor: "red", backgroundColor: "#DAA" },
        }}
      />
    </>
  );
};

const Layout = ({
  input,
  previews,
  submitButton,
  dropzoneProps,
  files,
  extra: { maxFiles },
}: ILayoutProps) => {
  return (
    <Box>
      {previews}
      <Box {...dropzoneProps}>{files.length < maxFiles && input}</Box>
      {/* {files.length > 0 && submitButton} */}
    </Box>
  );
};

export default Uploader;
