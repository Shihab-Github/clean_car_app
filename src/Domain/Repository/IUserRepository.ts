import { User } from "../Model/User/User";

export interface IUserRepository {
  getUsers(): User[];
}
