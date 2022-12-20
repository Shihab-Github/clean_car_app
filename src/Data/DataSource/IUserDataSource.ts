import { User } from "../../Domain/Model/User/User";
import { Credentials, Response, SignUpProps } from "../../interfaces";

export default interface IUserDataSource {
  getUsers(): User[];
  login(loginData: Credentials): boolean;
  signUp(data: User): Response;
}
