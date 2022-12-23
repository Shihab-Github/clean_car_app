import { UserType } from "../../../interfaces";
import { Car } from "../Car/Car";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: number;
  email?: string;
  type: UserType;
  password?: string;
}
