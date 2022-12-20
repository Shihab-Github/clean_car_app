import { Credentials, Response } from "../../../interfaces";
import { IUserRepository } from "../../Repository/IUserRepository";

export interface LoginUserUseCase {
  login: (loginData: Credentials) => Response;
}

export class Login implements LoginUserUseCase {
  private userRepo: IUserRepository;
  constructor(_userRepo: IUserRepository) {
    this.userRepo = _userRepo;
  }

  login(loginData: Credentials): Response {
    return this.userRepo.login(loginData);
  }
}
