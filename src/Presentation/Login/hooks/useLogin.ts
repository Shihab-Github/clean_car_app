import UserDataSource from "../../../Data/DataSource/API/UserDataSource";
import { UserRepository } from "../../../Data/Repository/UserRepository";
import { Login } from "../../../Domain/UseCases/User/Login";
import { Credentials } from "../../../interfaces";

export default function useLogin() {
  function login(cred: Credentials) {
    const UseCase = new Login(new UserRepository(new UserDataSource()));
    const isSuccess = UseCase.login(cred);
    return isSuccess;
  }

  return [{ login }] as const;
}
