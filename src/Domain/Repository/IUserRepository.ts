import { Credentials, Response, SignUpProps } from "../../interfaces";
import { User } from "../Model/User/User";

export interface IUserRepository {
  getUsers(): User[];
  login(loginData: Credentials): boolean;
  signUp(data: User): Response;
}
