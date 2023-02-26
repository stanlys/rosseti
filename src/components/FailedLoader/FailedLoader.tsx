import React from "react";
import { Alert, AlertTitle } from "@mui/material";

interface FailedLoaderProps {
  title: string;
  message: string;
  strongMessage: string;
}

const FailedLoader: React.FC<FailedLoaderProps> = ({
  title,
  message,
  strongMessage,
}) => {
  return (
    <Alert severity="error">
      <AlertTitle>{title}</AlertTitle>
      {message} — <strong>{strongMessage}</strong>
    </Alert>
  );
};

export default FailedLoader;
