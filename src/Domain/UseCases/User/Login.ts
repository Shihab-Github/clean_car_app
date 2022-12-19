import { Credentials } from "../../../interfaces";
import { IUserRepository } from "../../Repository/IUserRepository";

export interface LoginUserUseCase {
  login: (loginData: Credentials) => boolean;
}

export class Login implements LoginUserUseCase {
  private userRepo: IUserRepository;
  constructor(_userRepo: IUserRepository) {
    this.userRepo = _userRepo;
  }

  login(loginData: Credentials) {
    let isSuccess = this.userRepo.login(loginData);
    return isSuccess;
  }
}
