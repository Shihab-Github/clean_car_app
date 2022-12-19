import { Credentials } from "../../interfaces";
import { User } from "../Model/User/User";

export interface IUserRepository {
  getUsers(): User[];
  login(loginData: Credentials): boolean;
}
