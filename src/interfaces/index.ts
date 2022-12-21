import { AlertColor } from "@mui/material";

export interface Credentials {
  phoneNumber: number;
  password: string;
}

export interface DropDownOption {
  title: string;
  value: string;
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
  payload?: object | [] | null;
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

export enum YesNo {
  Yes = "yes",
  No = "no",
}

export interface Menu {
  title: string;
  path: string;
}
