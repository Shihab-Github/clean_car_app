import { User } from "../../Domain/Model/User/User";
import { Credentials, Response } from "../../interfaces";

export default interface IUserDataSource {
  getUsers(): User[];
  login(loginData: Credentials): Response;
  signUp(data: User): Response;
}
