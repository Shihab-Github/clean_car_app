import { UserType } from "../../../interfaces";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: number;
  email?: string;
  type: UserType
  password?: string;
}
