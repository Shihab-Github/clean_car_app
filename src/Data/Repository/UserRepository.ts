import { User } from "../../Domain/Model/User/User";
import { IUserRepository } from "../../Domain/Repository/IUserRepository";
import { Credentials } from "../../interfaces";
import UserDataSource from "../DataSource/API/UserDataSource";

export class UserRepository implements IUserRepository {
  dataSouce: UserDataSource;

  constructor(_dataSource: UserDataSource) {
    this.dataSouce = _dataSource;
  }

  getUsers(): User[] {
    return this.dataSouce.getUsers();
  }

  login(loginData: Credentials): boolean {
    return this.dataSouce.login(loginData)
  }
}
