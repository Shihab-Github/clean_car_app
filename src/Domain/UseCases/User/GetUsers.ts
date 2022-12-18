import { User } from "../../Model/User/User";
import { IUserRepository } from "../../Repository/IUserRepository";

export interface GetUsersUseCase {
  invoke: () => User[];
}

export class GetUsers implements GetUsersUseCase {
  private userRepo: IUserRepository;
  constructor(_userRepo: IUserRepository) {
    this.userRepo = _userRepo;
  }

  invoke() {
    return this.userRepo.getUsers();
  }
}
