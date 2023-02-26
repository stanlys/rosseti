import SvgIcon from "@mui/material/SvgIcon/SvgIcon";
import { Box, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

interface EntryField {
  icon: React.ElementType;
  label: string;
  name: string;
  isError: boolean;
  error: string | undefined;
  value: string;
  required?: boolean;
  finder?: boolean;
  onChange: (e: React.ChangeEvent) => void;
}

const EntryField: React.FC<EntryField> = ({
  label,
  icon,
  value,
  name,
  isError,
  error,
  required,
  finder,
  onChange,
}) => {
  return (
    <Box sx={{ display: "flex", alignItems: "flex-end" }}>
      <SvgIcon
        component={icon}
        inheritViewBox
        sx={{ color: "action.active", mr: 1, my: 0.5 }}
      />
      <TextField
        label={label}
        variant="standard"
        name={name}
        fullWidth
        value={value}
        onChange={onChange}
        error={isError}
        helperText={error}
        required={required}
      />
      {finder && (
        <IconButton color="primary">
          <SearchIcon />
        </IconButton>
      )}
    </Box>
  );
};

export default EntryField;
