import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  SvgIcon,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { getAllDeliveryOrganization } from "../../../store/Delivery/thunk";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";

interface SelectFromListProps {
  icon: React.ElementType;
  label: string;
  name: string;
  isError: boolean;
  error: string | undefined;
  value: string;
  required?: boolean;
  onChange: (field: string, value: string) => void;
}

const SelectFromList: React.FC<SelectFromListProps> = ({
  label,
  value,
  onChange,
}) => {
  const [currentId, setCurrentID] = useState<string>("");

  const changeOrganization = (e: SelectChangeEvent) => {
    setCurrentID(e.target.value);
    onChange("postman", e.target.value);
  };

  const dispatch = useAppDispatch();
  const postmans = useAppSelector(
    (state) => state.deliveryOrganization.organization
  );

  useEffect(() => {
    dispatch(getAllDeliveryOrganization());
  }, []);

  return (
    <FormControl variant="standard">
      <InputLabel>{label}</InputLabel>
      <Select label={label} value={value} onChange={changeOrganization}>
        {postmans.map(({ _id, orgname }) => (
          <MenuItem key={_id} value={_id}>
            {orgname}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectFromList;
