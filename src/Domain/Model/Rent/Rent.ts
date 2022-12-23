import { Car } from "../Car/Car";
import { User } from "../User/User";
import dayjs, { Dayjs } from "dayjs";

export interface Rent {
  id: string;
  car: Car;
  user: User;
  price: number;
  startDate: Dayjs;
  endDate: Dayjs;
}
