import { AlertColor } from "@mui/material";

export interface Credentials {
  email: string;
  password: string;
}

export interface SnackBarProps {
  open: boolean;
  setOpen: (val: boolean) => void | undefined;
  message: string;
  severity: AlertColor;
}