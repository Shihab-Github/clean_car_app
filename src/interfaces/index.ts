import { AlertColor } from "@mui/material";

export interface Credentials {
  email: string;
  password: string;
}

export interface SignUpProps {
  firstName: string;
  lastName: string;
  password: string;
  password2: string;
  phoneNumber: number;
  type: string;
}

export interface Response {
  statusCode: number;
  errorMessage?: string;
  successMessage?: string;
}

export interface SnackBarProps {
  open: boolean;
  setOpen: (val: boolean) => void | undefined;
  message: string;
  severity: AlertColor;
}

export enum UserType {
  Customer = "customer",
  Employee = "employee",
}
